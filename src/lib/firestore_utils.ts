import { firestore } from "./firebase";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  getDocs,
  setDoc, // Import setDoc for addUser
  deleteDoc, // Import deleteDoc for deleteUser
  writeBatch,
  Timestamp,
  addDoc,
  serverTimestamp,
  QueryDocumentSnapshot,
  limit,
  startAfter, // Import writeBatch for batch deletions
} from "firebase/firestore";
import type { User } from "~/data/userData";
import type { Content } from "~/data/contentData";
import type { Notice } from "~/data/noticeData";
import { calculateGrade, deleteImageByUrl } from "~/lib/helper";
import type { PostType } from "~/data/postData";

/**
 * Fetches a user's profile from the 'users' collection in Firestore.
 * @param uid The user's unique ID from Firebase Authentication.
 * @returns The user profile object or null if not found.
 */
export const getUserProfile = async (uid: string): Promise<User | null> => {
  const userDocRef = doc(firestore, "users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    const userData = userDocSnap.data();

    // Fetch the contentStatus subcollection
    const contentStatusCollectionRef = collection(userDocRef, "contentStatus");
    const contentStatusSnap = await getDocs(contentStatusCollectionRef);

    // Create a Set of completed content IDs
    const contentStatus = new Set(contentStatusSnap.docs.map((doc) => doc.id));

    return {
      uid,
      name: userData.name ?? "",
      nickname: userData.nickname ?? "",
      email: userData.email ?? "",
      exp: userData.exp ?? 0,
      authority: userData.authority ?? "user",
      course: userData.course ?? "default",
      grade: userData.grade ?? "beginner",
      photoURL: userData.photoURL ?? null,
      contentStatus,
    } as User;
  } else {
    console.error("No user profile found in Firestore for UID:", uid);
    return null;
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  const usersCollectionRef = collection(firestore, "users");
  const querySnapshot = await getDocs(usersCollectionRef);
  const users: User[] = [];

  for (const userDoc of querySnapshot.docs) {
    const userData = userDoc.data();
    const uid = userDoc.id;

    // Fetch the contentStatus subcollection for each user
    const contentStatusCollectionRef = collection(userDoc.ref, "contentStatus");
    const contentStatusSnap = await getDocs(contentStatusCollectionRef);
    const contentStatus = new Set(contentStatusSnap.docs.map((doc) => doc.id));

    users.push({
      uid,
      ...userData,
      contentStatus,
    } as User);
  }

  return users;
};

/**
 * Updates an existing user in Firestore.
 * @param uid The user's unique ID.
 * @param updates Partial user object with fields to update.
 */
export const updateUser = async (uid: string, updates: Partial<User>) => {
  const userDocRef = doc(firestore, "users", uid);
  // Do not allow contentStatus to be updated directly via this function
  const { contentStatus, ...updatesToApply } = updates;
  await updateDoc(userDocRef, updatesToApply);
};

/**
 * Deletes a user from Firestore, including their contentStatus subcollection.
 * @param uid The user's unique ID.
 */
export const deleteUser = async (uid: string) => {
  const userDocRef = doc(firestore, "users", uid);

  // Delete all documents in the contentStatus subcollection
  const contentStatusCollectionRef = collection(userDocRef, "contentStatus");
  const querySnapshot = await getDocs(contentStatusCollectionRef);
  const batch = writeBatch(firestore);
  querySnapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Delete the main user document
  await deleteDoc(userDocRef);
};

/**
 * Updates the course for a user in Firestore.
 * @param uid The user's unique ID.
 * @param newCourse The new course to set.
 */
export const updateUserCourse = async (uid: string, newCourse: string) => {
  const userDocRef = doc(firestore, "users", uid);
  await updateDoc(userDocRef, {
    course: newCourse,
  });
};

export const resetUserLearningInfo = async (uid: string) => {
  const userDocRef = doc(firestore, "users", uid);
  const contentStatusCollectionRef = collection(userDocRef, "contentStatus");
    // 1. Reset main user document fields
    await updateDoc(userDocRef, {
      exp: 0,
      grade: "Bronze",
    }); 
    
    // 2. Delete all documents in the contentStatus subcollection
    const querySnapshot = await getDocs(contentStatusCollectionRef);
    const batch = writeBatch(firestore);
    querySnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    }
    );
    await batch.commit();
};

export const getNotices = async (): Promise<Notice[]> => {
  try {
    const noticesRef = collection(firestore, "notices");
    const q = query(noticesRef, orderBy("createdAt", "desc"));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        createdAt: (data.createdAt as Timestamp).toDate(),
        isNew: data.isNew ?? false,
        isImportant: data.isImportant ?? false,
      } as Notice;
    });
  } catch (error) {
    console.error("Failed to fetch notices:", error);
    return [];
  }
};

export const addNotice = async (
  title: string,
  content: string,
  isNew?: boolean,
  isImportant?: boolean,
): Promise<void> => {
  try {
    const noticesRef = collection(firestore, "notices");

    await addDoc(noticesRef, {
      title: title,
      content: content,
      isNew: isNew ?? true,
      isImportant: isImportant ?? false,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Failed to create notice:", error);
    throw error;
  }
};

export const deleteNotice = async (noticeId: string) => {
  const noticeRef = doc(firestore, "notices", noticeId);
  await deleteDoc(noticeRef);
};

export const editNotice = async (
  noticeId: string,
  updates: Partial<Omit<Notice, "id" | "createdAt">>,
) => {
  try {
    const noticeRef = doc(firestore, "notices", noticeId);
    await updateDoc(noticeRef, updates);
  } catch (error) {
    console.error(`Failed to update notice ${noticeId}:`, error);
    throw error;
  }
};

export const completeLectureForUser = async (
  user: User | null,
  lecture: Content | undefined,
): Promise<User | undefined> => {
  if (!user || !lecture) return;

  // 이미 완료한 강의인지 확인 (경험치 중복 지급 방지)
  if (user.contentStatus && user.contentStatus.has(lecture.id)) {
    return user;
  }

  try {
    const batch = writeBatch(firestore);
    const userRef = doc(firestore, "users", user.uid);
    const statusRef = doc(userRef, "contentStatus", lecture.id);

    // 1. 새로운 경험치 및 등급 계산
    const addedExp = lecture.exp || 0;
    const newTotalExp = user.exp + addedExp;
    const newGrade = calculateGrade(newTotalExp); // 헬퍼 함수 사용

    // 2. 로컬 상태 업데이트를 위한 객체 생성
    // contentStatus가 Set인 경우를 대비해 불변성을 유지하며 새 Set 생성
    const newContentStatus = new Set(user.contentStatus);
    newContentStatus.add(lecture.id);

    const updatedUser: User = {
      ...user,
      exp: newTotalExp,
      grade: newGrade, // 등급 갱신
      contentStatus: newContentStatus,
    };

    // 3. Batch 작업 등록
    batch.set(statusRef, {
      createdAt: serverTimestamp(),
      title: lecture.title, // 나중에 관리자 페이지에서 보기 편하도록 추가 권장
    });

    // DB 업데이트: exp와 grade를 동시에 업데이트합니다.
    batch.update(userRef, {
      exp: updatedUser.exp,
      grade: updatedUser.grade,
    });

    await batch.commit();

    return updatedUser;
  } catch (error) {
    console.error("Error completing lecture:", error);
    throw error; // 호출부에서 toast.error를 띄울 수 있도록 에러를 던집니다.
  }
};

export const getPosts = async ({
  currentUserId,
  postOrder = "new",
  pageParam, // TanStack Query에서 넘겨주는 파라미터
}: {
  currentUserId?: string;
  postOrder?: "new" | "popular";
  pageParam?: QueryDocumentSnapshot; // 마지막 문서 스냅샷 타입
}) => {
  const postsCollection = collection(firestore, "posts");

  // 1. 쿼리 생성 (정렬 기준에 따라 분기)
  let q = query(
    postsCollection,
    orderBy(postOrder === "new" ? "createdAt" : "likeCount", "desc"),
    limit(3), // 한 번에 가져올 개수
  );

  // 2. 다음 페이지라면 마지막 문서 이후부터 가져오기
  if (pageParam) {
    q = query(q, startAfter(pageParam));
  }

  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  const posts: PostType[] = [];

  // 3. 데이터 가공 (성능을 위해 Promise.all 활용 권장)
  for (const docSnap of querySnapshot.docs) {
    const data = docSnap.data();
    // (기존 likes 가져오는 로직 유지하되, 데이터가 많아지면 sub-collection 조합은 주의가 필요합니다)
    const likesSnapshot = await getDocs(collection(docSnap.ref, "likes"));
    const likedUserIds = likesSnapshot.docs.map((likeDoc) => likeDoc.id);

    posts.push({
      id: docSnap.id,
      title: data.title,
      content: data.content,
      projectLink: data.projectLink,
      imageUrl: data.imageUrl,
      likeCount: data.likeCount || likedUserIds.length,
      name: data.name,
      createdAt: data.createdAt.toDate(),
      isLiked: currentUserId ? likedUserIds.includes(currentUserId) : false,
    });
  }

  return { posts, lastVisible }; // 다음 페이지를 위해 lastVisible 반환
};

export const addPost = async (
  post: Omit<PostType, "id" | "createdAt" | "likeCount" | "isLiked">,
  userId: string,
) => {
  const newPost = {
    ...post,
    userId: userId,
    createdAt: Timestamp.now(),
    likeCount: 0,
  };

  const docRef = await addDoc(collection(firestore, "posts"), newPost);

  return {
    ...newPost,
    id: docRef.id,
    likeCount: 0,
    isLiked: false,
  };
};

export const updatePost = async (
  id: string,
  prevPost: PostType,
  post: Partial<Omit<PostType, "id">>,
) => {
  const postRef = doc(firestore, "posts", id);

  // 1️⃣ 이미지가 변경되었을 경우
  if (prevPost.imageUrl && post.imageUrl !== prevPost.imageUrl) {
    try {
      await deleteImageByUrl(prevPost.imageUrl);
    } catch (e) {
      console.warn("기존 이미지 삭제 실패", e);
    }
  }

  // 2️⃣ Firestore 업데이트
  await updateDoc(postRef, post);
};

export const deletePost = async (post: PostType) => {
  // 1️⃣ 이미지 삭제
  if (post.imageUrl) {
    try {
      await deleteImageByUrl(post.imageUrl);
    } catch (e) {
      console.warn("이미지 삭제 실패", e);
    }
  }

  // 2️⃣ Firestore 문서 삭제
  const postRef = doc(firestore, "posts", post.id);
  await deleteDoc(postRef);
};

export const likePost = async (postId: string, userId: string) => {
  if (!userId) return;

  const postRef = doc(firestore, "posts", postId);
  const likeRef = doc(collection(postRef, "likes"), userId);

  const likeSnapshot = await getDoc(likeRef);
  const postSnapshot = await getDoc(postRef);

  if (!postSnapshot.exists()) return;

  const data = postSnapshot.data();
  let likeCount = data.likeCount || 0;

  if (!likeSnapshot.exists()) {
    // 좋아요 추가
    await setDoc(likeRef, { createdAt: Timestamp.now() });
    likeCount++;
  } else {
    // 좋아요 취소
    await deleteDoc(likeRef);
    likeCount--;
  }

  await updateDoc(postRef, { likeCount });
};
