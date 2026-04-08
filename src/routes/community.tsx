// react
import { useEffect, useState } from "react";
// atoms
import { useAtomValue, useAtom } from "jotai";
import { currentUserAtom } from "~/data/userData";
import { postOrderAtom, type PostType } from "~/data/postData";
// shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { toast } from "sonner";
// components
import { BackgroundSpinner } from "~/components/Common/BackgroundSpinner";
import { CommunityHeader } from "~/components/Community/CommunityHeader";
import { CommunityPost } from "~/components/Community/CommunityPost";
import CommunityPostForm from "~/components/Community/CommunityPostForm";
// i18n
import { useTranslation } from "react-i18next";
import { isNewPost } from "~/lib/helper";
// data fetching
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "~/lib/firestore_utils";
import { usePost } from "~/hooks/usePost";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import { useInView } from "react-intersection-observer";

export default function CommunityPage() {
  const { t } = useTranslation();

  const currentUser = useAtomValue(currentUserAtom);
  const currentUserId = currentUser?.uid || "Anonymous";

  const [postOrder, setPostOrder] = useAtom(postOrderAtom);
  // 게시글 데이터와 무한 스크롤 관련 상태
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["posts", currentUserId, postOrder],
    queryFn: ({ pageParam }) =>
      getPosts({ currentUserId, postOrder, pageParam }),
    initialPageParam: undefined as QueryDocumentSnapshot | undefined,
    getNextPageParam: (lastPage) => {
      // 반환된 데이터가 limit(3)보다 적으면 다음 페이지가 없는 것으로 간주
      return lastPage.posts.length < 3 ? undefined : lastPage.lastVisible;
    },
  });
  // 게시글 관련 뮤테이션 훅
  const {
    addPostMutation,
    updatePostMutation,
    deletePostMutation,
    likePostMutation,
  } = usePost();
  const [editingPost, setEditingPost] = useState<PostType | null>(null);
  const [showForm, setShowForm] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  // 사용자가 바닥에 도달(inView)하고, 다음 페이지가 있다면(hasNextPage) 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleDelete = async (post: PostType) => {
    try {
      await deletePostMutation.mutateAsync(post);

      toast.success(t("community.community_post_deleted"));
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  const handleSave = async (
    post: Omit<PostType, "id" | "createdAt" | "likeCount" | "isLiked"> & {
      userId: string;
    },
  ) => {
    if (editingPost) {
      updatePostMutation.mutate({
        id: editingPost.id,
        prevPost: editingPost,
        post,
      });
      toast.success(
        `${t("community.community_post_success_post")} ${t("community.community_post_success_update")}`,
      );
    } else {
      addPostMutation.mutate({
        post,
        userId: post.userId || "Anonymous",
      });
      toast.success(
        `${t("community.community_post_success_post")} ${t("community.community_post_success_add")}`,
      );
    }
  };

  const handleClickLikeButton = (post: PostType) => {
    likePostMutation.mutate({ postId: post.id, userId: currentUserId });
  };

  if (isLoading) return <BackgroundSpinner />;

  return (
    /* 전체 배경 + 양옆 여백 */
    <div className="min-h-screen w-full bg-muted/40">
      <div className="flex justify-center">
        {/* 중앙 쇼츠 피드 */}
        <main className="w-full max-w-xl md:max-w-2xl px-4 py-10 space-y-10">
          {/* 상단 액션 바 */}
          <CommunityHeader
            postOrder={postOrder}
            setPostOrder={setPostOrder}
            setEditingPost={setEditingPost}
            setShowForm={setShowForm}
          />
          {/* 게시글 피드 */}
          {posts ? (
            <CommunityPost
              posts={posts.pages.flatMap((page) => page.posts)}
              handleClickLikeButton={handleClickLikeButton}
              handleDelete={handleDelete}
              setEditingPost={setEditingPost}
              setShowForm={setShowForm}
              isNewPost={isNewPost}
            />
          ) : (
            <p>Data not Found</p>
          )}
        </main>
      </div>

      {/* 게시글 작성 / 수정 다이얼로그 */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent
          aria-describedby={t("community.community_post_add_label")}
        >
          <DialogHeader>
            <DialogTitle>
              {editingPost
                ? t("community.community_post_edit_label")
                : t("community.community_post_add_label")}
            </DialogTitle>
          </DialogHeader>

          <CommunityPostForm
            editPost={editingPost}
            onClose={() => setShowForm(false)}
            onSave={handleSave}
          />
        </DialogContent>
      </Dialog>
      {/* 감지용 타겟 요소 */}
      <div ref={ref} style={{ height: "20px", background: "transparent" }}>
        {isFetchingNextPage && "Loading..."}
      </div>
    </div>
  );
}
