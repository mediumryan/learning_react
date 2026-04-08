import { atom } from "jotai";

export type PostType = {
  id: string;
  title: string;
  content: string;
  projectLink?: string;
  imageUrl: string | null;
  likeCount: number;
  name: string;
  createdAt: Date;
  isLiked?: boolean;
  userId?: string;
};

export type PostOrderType = "new" | "popular";

export const postOrderAtom = atom<PostOrderType>("new");

export const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB

export const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
