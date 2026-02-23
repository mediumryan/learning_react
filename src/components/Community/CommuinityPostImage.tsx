import { useState } from 'react';
// shadcn/ui
import { Skeleton } from '~/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '~/components/ui/dialog';
// icons
import { ImageIcon, ZoomIn } from 'lucide-react';
// helpers
import { cn } from '~/lib/utils';

const PostImage = ({ src, title }: { src: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog>
      {/* 1. 트리거: 클릭할 수 있는 프리뷰 이미지 */}
      <DialogTrigger asChild>
        <div className="aspect-video overflow-hidden rounded-md relative bg-muted cursor-pointer group">
          {isLoading && (
            <Skeleton className="absolute inset-0 h-full w-full flex items-center justify-center">
              <ImageIcon className="h-10 w-10 text-muted-foreground/20" />
            </Skeleton>
          )}

          {/* 호버 시 나타나는 돋보기 아이콘 효과 */}
          {!isLoading && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
          )}

          <img
            src={src}
            alt={title}
            className={cn(
              'h-full w-full object-cover transition-all duration-300 group-hover:scale-105',
              isLoading ? 'opacity-0' : 'opacity-100',
            )}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </DialogTrigger>

      {/* 2. 확대된 이미지 내용 */}
      <DialogContent
        // max-w-none을 추가하여 기본 너비 제약을 명시적으로 제거합니다.
        className="max-w-none w-screen h-screen p-0 border-none bg-transparent shadow-none flex items-center justify-center outline-none"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{title} Zoomed-in</DialogTitle>

        <img
          src={src}
          alt={title}
          // w-full 또는 w-auto와 함께 h-full을 사용하여 화면을 꽉 채우도록 유도합니다.
          className="w-auto h-auto max-w-[80vw] max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PostImage;
