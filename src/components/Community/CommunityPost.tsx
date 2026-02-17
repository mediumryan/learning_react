// atoms
import type { PostType } from '~/data/postData';
// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CommunityPostFooter } from './CommunityPostFooter';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '~/lib/utils';
import { useAtomValue } from 'jotai';
import { usersAtom, type User } from '~/data/userData';
import { useMemo } from 'react';

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
    <div className="flex flex-col gap-4">
      {posts.map((post) => {
        const author = userMap[post.userId || ''];
        return (
          <Card key={post.id} className="shadow-sm relative">
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar
                    className={cn(
                      'w-10 h-10 cursor-pointer border border-gray-200',
                    )}
                  >
                    {author?.photoURL && (
                      <AvatarImage
                        src={author.photoURL}
                        alt={author.name}
                        className="object-cover"
                      />
                    )}

                    <AvatarFallback className="bg-black text-white select-none">
                      <span>
                        {author?.name
                          ? author.name.charAt(0).toUpperCase()
                          : '?'}
                      </span>
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.title}</span>
                </div>
                <div className="text-sm flex flex-col items-end gap-0.5">
                  <span>{post.createdAt.toLocaleDateString()}</span>
                  <span>{author?.nickname ?? 'Anonymous'}</span>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <div className="flex-1 flex flex-col justify-between gap-4">
                <p className=" text-sm text-muted-foreground">{post.content}</p>

                {post.projectLink && (
                  <a
                    href={post.projectLink}
                    target="_blank"
                    className="text-sm text-blue-600 underline font-bold italic"
                  >
                    {t('community.community_post_link')}
                  </a>
                )}
              </div>

              {post.imageUrl && (
                <div className="flex-1 aspect-video overflow-hidden rounded-md">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
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
    </div>
  );
};

export default CommunityPost;
