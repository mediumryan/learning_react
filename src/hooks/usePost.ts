import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostType } from "~/data/postData";
import {
  addPost,
  deletePost,
  likePost,
  updatePost,
} from "~/lib/firestore_utils";

export const usePost = () => {
  const queryClient = useQueryClient();

  // 포스트 추가
  const addPostMutation = useMutation({
    mutationFn: ({
      post,
      userId,
    }: {
      post: Omit<PostType, "id" | "createdAt" | "likeCount" | "isLiked">;
      userId: string;
    }) => addPost(post, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  // 포스트 수정
  const updatePostMutation = useMutation({
    mutationFn: ({
      id,
      prevPost,
      post,
    }: {
      id: string;
      prevPost: PostType;
      post: Omit<PostType, "id" | "createdAt" | "likeCount" | "isLiked">;
    }) => updatePost(id, prevPost, post),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      }),
  });

  // 포스트 삭제
  const deletePostMutation = useMutation({
    mutationFn: async (post: PostType) => deletePost(post),
    onMutate: async (post: PostType) => {
      // Optimistic UI: 삭제 직후 화면에서 제거
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData<PostType[]>(["posts"]);

      queryClient.setQueryData<PostType[]>(["posts"], (oldPosts = []) =>
        oldPosts.filter((p) => p.id !== post.id),
      );

      return { previousPosts }; // 롤백용
    },
    onError: (_err, _post, context) => {
      // 오류 시 롤백
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // 포스트 좋아요 토글
  const likePostMutation = useMutation({
    mutationFn: ({ postId, userId }: { postId: string; userId: string }) =>
      likePost(postId, userId),
    onMutate: async ({ postId }) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previousPosts = queryClient.getQueryData<PostType[]>(["posts"]);

      // 클릭 즉시 UI 반영
      queryClient.setQueryData<PostType[]>(["posts"], (oldPosts = []) =>
        oldPosts.map((p) =>
          p.id === postId
            ? {
                ...p,
                likeCount: p.isLiked ? p.likeCount - 1 : p.likeCount + 1,
                isLiked: !p.isLiked,
              }
            : p,
        ),
      );

      return { previousPosts }; // 롤백 가능
    },
    onError: (_err, _variables, context) => {
      // 오류 발생 시 이전 상태로 복원
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    addPostMutation,
    updatePostMutation,
    deletePostMutation,
    likePostMutation,
  };
};
