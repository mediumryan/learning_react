// react
import { useMemo } from "react";
// atoms
import { usersAtom, type User } from "~/data/userData";
import type { PostType } from "~/data/postData";
import { useAtomValue } from "jotai";
// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
// components
import { CommunityPostFooter } from "./CommunityPostFooter";
import PostImage from "~/components/Community/CommuinityPostImage";
// helpers
import { cn } from "~/lib/utils";
// i18n
import { useTranslation } from "react-i18next";

interface CommunityPostProps {
  posts: PostType[];
  handleClickLikeButton: (post: PostType) => void;
  handleDelete: (post: PostType) => void;
  setEditingPost: (post: PostType | null) => void;
  setShowForm: (show: boolean) => void;
  isNewPost: (post: PostType) => boolean;
}

export const CommunityPost = ({
  posts,
  handleClickLikeButton,
  handleDelete,
  setEditingPost,
  setShowForm,
  isNewPost,
}: CommunityPostProps) => {
  const { t } = useTranslation();

  const allUsers = useAtomValue(usersAtom);

  const userMap = useMemo(() => {
    if (!allUsers) return {};
    return allUsers.reduce(
      (acc, user) => {
        acc[user.uid] = user;
        return acc;
      },
      {} as Record<string, User>,
    );
  }, [allUsers]);

  return (
    <>
      {posts.map((post) => {
        const author = userMap[post.userId || ""];
        return (
          <Card key={post.id} className="shadow-sm relative">
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar
                    className={cn(
                      "w-10 h-10 cursor-pointer border border-gray-200",
                    )}
                  >
                    {author?.photoURL && (
                      <AvatarImage
                        src={author.photoURL}
                        alt={author.nickname || "User Avatar"}
                        className="object-cover"
                      />
                    )}

                    <AvatarFallback className="bg-black text-white select-none">
                      <span>
                        {author?.nickname
                          ? author.nickname.charAt(0).toUpperCase()
                          : "?"}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.title}</span>
                </div>
                <div className="text-sm flex flex-col items-end space-y-0.5">
                  <span>{author?.nickname ?? "Anonymous"}</span>
                  <span>{post.createdAt.toLocaleDateString()}</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{post.content}</p>

              {post.projectLink && (
                <a
                  href={post.projectLink}
                  target="_blank"
                  className="text-sm text-blue-600 underline font-bold italic"
                >
                  {t("community.community_post_link")}
                </a>
              )}

              {/* 이미지 렌더링 부분 수정 */}
              {post.imageUrl && (
                <PostImage src={post.imageUrl} title={post.title} />
              )}
            </CardContent>
            <CommunityPostFooter
              post={post}
              setEditingPost={setEditingPost}
              setShowForm={setShowForm}
              handleClickLikeButton={handleClickLikeButton}
              handleDelete={handleDelete}
              isNewPost={isNewPost}
            />
          </Card>
        );
      })}
    </>
  );
};

export default CommunityPost;
