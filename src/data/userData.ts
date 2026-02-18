import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export type User = {
  uid: string;
  name: string;
  nickname: string;
  email: string;
  course: Course;
  grade: Grade;
  exp: number;
  authority: Authority;
  photoURL?: string | null;
  contentStatus: Set<string>;
};

export type Authority = "admin" | "instructor" | "user";

export type Grade = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";

export type Course = "Beginner" | "Intermediate" | "Advanced";

export const authLoadingAtom = atom(true);

// 세션스토리지 설정 + Set 자동 변환 로직
const storage = createJSONStorage<User | null>(() => sessionStorage, {
  // 1. 저장할 때: Set 객체를 만나면 자동으로 Array로 바꿈
  replacer: (_, value) => {
    if (value instanceof Set) {
      return Array.from(value);
    }
    return value;
  },
  // 2. 불러올 때: contentStatus 필드를 만나면 자동으로 Set으로 바꿈
  reviver: (key, value) => {
    if (key === "contentStatus" && Array.isArray(value)) {
      return new Set(value);
    }
    return value;
  },
});

// 이제 이 Atom은 컴포넌트에서 쓸 때 항상 User 타입을 유지하며,
// contentStatus는 자동으로 Set<string>으로 복구됩니다.
export const currentUserAtom = atomWithStorage<User | null>(
  "currentUser",
  null,
  storage,
);

export const usersAtom = atom<User[] | null>(null);
