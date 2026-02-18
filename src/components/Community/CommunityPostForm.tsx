// react
import { useState } from "react";
// atoms
import { useAtomValue } from "jotai";
import { currentUserAtom } from "~/data/userData";
// types
import { ALLOWED_TYPES, MAX_FILE_SIZE, type PostType } from "~/data/postData";
// shadcn/ui
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
// icons
import { X } from "lucide-react";
// firebase
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "~/lib/firebase";
import { toast } from "sonner";
// i18n
import { useTranslation } from "react-i18next";

interface PostFormProps {
  editPost: PostType | null;
  onClose: () => void;
  onSave: (
    post: Omit<PostType, "id" | "createdAt" | "likeCount" | "likedUsers"> & {
      userId: string;
    },
  ) => void;
}

const ALLOWED_IMAGE_TYPES = ["jpeg", "png", "webp"];
const POST_FORM_TITLE_STYLE = "text-blue-500 mb-4";

export const CommunityPostForm = ({
  editPost,
  onClose,
  onSave,
}: PostFormProps) => {
  const { t } = useTranslation();

  const [title, setTitle] = useState(editPost?.title || "");
  const [content, setContent] = useState(editPost?.content || "");
  const [projectLink, setProjectLink] = useState(editPost?.projectLink || "");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(
    editPost?.imageUrl || null,
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    editPost?.imageUrl || null,
  );

  const currentUser = useAtomValue(currentUserAtom);

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error(t("community.community_post_add_title_required"));
      return;
    }

    let finalImageUrl: string | null = existingImageUrl;

    // 🔥 1. 새 파일이 있으면 업로드 후 URL 획득
    if (imageFile) {
      const imageRef = ref(storage, `posts/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      finalImageUrl = await getDownloadURL(imageRef);
    }
    // 2. 새 파일도 없고 기존 URL도 없으면 null (이미지 삭제된 경우)

    onSave({
      title,
      content,
      projectLink,
      imageUrl: finalImageUrl,
      name: currentUser?.nickname || "Anonymous",
      userId: currentUser?.uid || "Anonymous",
    });

    onClose();
  };

  const validateImageFile = (file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return t("community.community_post_image_error_invalid_type");
    }

    if (file.size > MAX_FILE_SIZE) {
      return t("community.community_post_image_error_too_large");
    }

    return null;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateImageFile(file);
    if (error) {
      toast.error(error);
      // 같은 파일 다시 선택 가능하게
      e.target.value = "";
      return;
    }

    setImageFile(file);
    // 새 파일이 선택되면 기존 URL은 무효화
    setExistingImageUrl(null);
    // 미리보기 생성
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setExistingImageUrl(null);
    setPreviewUrl(null);
  };

  return (
    <div className="space-y-4">
      {/* 제목 */}
      <div className="space-y-1">
        <Label htmlFor="title" className={POST_FORM_TITLE_STYLE}>
          {t("community.community_post_add_title_label")}
        </Label>
        <Input
          id="title"
          placeholder={t("community.community_post_add_title_placeholder")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* 내용 */}
      <div className="space-y-1">
        <Label htmlFor="content" className={POST_FORM_TITLE_STYLE}>
          {t("community.community_post_add_content_label")}
        </Label>
        <Textarea
          id="content"
          placeholder={t("community.community_post_add_content_placeholder")}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
      </div>

      {/* 프로젝트 링크 */}
      <div className="space-y-1">
        <Label htmlFor="projectLink" className={POST_FORM_TITLE_STYLE}>
          {t("community.community_post_add_link_label")}
        </Label>
        <Input
          id="projectLink"
          placeholder="https://example.com"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />
      </div>

      {/* 이미지 업로드 */}
      <div className="space-y-2">
        <Label htmlFor="image" className={POST_FORM_TITLE_STYLE}>
          {t("community.community_post_add_preview_label")}
        </Label>

        {previewUrl ? (
          // 이미지가 있을 때 (기존 혹은 새로 선택됨)
          <div className="relative aspect-video rounded-md overflow-hidden border border-slate-200">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-lg"
              onClick={handleRemoveImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          // 이미지가 없을 때
          <Input
            id="image"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="cursor-pointer"
            onChange={handleFileChange}
          />
        )}

        {/* helper text */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>{t("community.community_post_add_upload_limit_label")}:</span>

          <Badge variant="secondary">
            {MAX_FILE_SIZE / (1024 * 1024)}MB{" "}
            {t("community.community_post_add_upload_limit_mb")}
          </Badge>

          {ALLOWED_IMAGE_TYPES.map((type) => (
            <Badge key={type} variant="outline">
              {type}
            </Badge>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex justify-end gap-2 pt-2">
        <Button variant="outline" onClick={onClose}>
          {t("common.cancel")}
        </Button>
        <Button onClick={handleSave}>
          {editPost ? t("common.edit") : t("common.upload")}
        </Button>
      </div>
    </div>
  );
};

export default CommunityPostForm;
