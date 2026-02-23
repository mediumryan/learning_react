import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "./firebase";
import { getAllUsers, getUserProfile } from "./firestore_utils";
import { authLoadingAtom, currentUserAtom, usersAtom } from "~/data/userData";
import { appStore } from "~/data/store";

// 회원가입
export const signUp = async (email: string, password: string) => {
  try {
    await setPersistence(auth, browserSessionPersistence);

    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Failed to sign up:", error);
    throw error;
  }
};

// 로그인
export const signIn = async (email: string, password: string) => {
  try {
    await setPersistence(auth, browserSessionPersistence);

    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Failed to sign in:", error);
    throw error;
  }
};

// 로그아웃
export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error("Failed to sign out:", error);
    throw error;
  }
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
