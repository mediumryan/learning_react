import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
import { getAllUsers, getUserProfile } from "./firestore_utils";
import { authLoadingAtom, currentUserAtom, usersAtom } from "~/data/userData";
import { appStore } from "~/data/store";

// 회원가입
export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 로그인
export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 로그아웃
export const logout = () => {
  return signOut(auth);
};

let authListenerInitialized = false;

export function initAuthListener() {
  try {
    if (authListenerInitialized) return;
    authListenerInitialized = true;

    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const [profile, allUsers] = await Promise.all([
          getUserProfile(firebaseUser.uid),
          getAllUsers(),
        ]);
        appStore.set(currentUserAtom, profile);
        appStore.set(usersAtom, allUsers);
      } else {
        appStore.set(currentUserAtom, null);
        appStore.set(usersAtom, []);
      }

      appStore.set(authLoadingAtom, false);
    });
  } catch (error) {
    console.error("Failed to initialize auth listener:", error);
  } finally {
    appStore.set(authLoadingAtom, false);
  }
}
