import { useTranslation } from "react-i18next";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useAtom } from "jotai";
import { currentUserAtom, type Course, type User } from "~/data/userData";
import { useState } from "react";
import { updateUserInFirestore } from "~/lib/firestore_utils";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "~/lib/firebase";

interface SettingsEditFormProps {
  setShowForm: (open: boolean) => void;
}

export const SettingsEditForm = ({ setShowForm }: SettingsEditFormProps) => {
  const { t } = useTranslation();

  const [currentUser, setCurrentUser] = useAtom<User | null>(currentUserAtom);

  const [name, setName] = useState(currentUser?.name ?? "");
  const [nickname, setNickname] = useState(currentUser?.nickname ?? "");
  const [course, setCourse] = useState<Course>(
    currentUser?.course ?? "Beginner",
  );

  // 이미지 파일 상태 관리를 위한 state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    currentUser?.photoURL ?? null,
  );

  // 이미지 선택 시 미리보기 처리 및 유효성 검사
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. 확장자 제한 (jpg, jpeg, png, svg)
    const allowedExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/svg+xml",
    ];
    if (!allowedExtensions.includes(file.type)) {
      toast.error(t("settings.settings_error_invalid_file_type"));
      e.target.value = ""; // input 초기화
      return;
    }

    // 2. 크기 제한 (0.5MB = 512KB)
    const maxSize = 0.5 * 1024 * 1024; // 524,288 bytes
    if (file.size > maxSize) {
      toast.error(t("settings.settings_error_file_too_large"));
      e.target.value = ""; // input 초기화
      return;
    }

    // 검증 통과 시 상태 업데이트
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      let finalPhotoURL = currentUser.photoURL;

      // 1. 새 이미지가 선택되었다면 Storage에 업로드
      if (imageFile) {
        const storageRef = ref(storage, `avatars/${currentUser.uid}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        finalPhotoURL = await getDownloadURL(snapshot.ref);
      }

      // 2. 업데이트할 객체 구성
      const updatedUser: User = {
        ...currentUser, // 기존의 grade, exp, authority 등을 유지하기 위해 스프레드 연산자 사용
        name,
        nickname,
        course,
        photoURL: finalPhotoURL,
      };

      // 3. Firestore 업데이트
      await updateUserInFirestore(updatedUser.uid, updatedUser);

      // 4. 전역 상태 업데이트
      setCurrentUser(updatedUser);

      toast.success(t("settings.settings_edit_success"));
      setShowForm(false);
    } catch (error) {
      console.error(error);
      toast.error(t("common.error_occurred"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 아바타 수정 섹션 */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <Label htmlFor="avatar-upload" className="cursor-pointer">
          <Avatar className="w-20 h-20">
            {previewUrl && (
              <AvatarImage src={previewUrl} className="object-cover" />
            )}
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Label>
        <Input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <p className="text-xs text-muted-foreground">
          {t("settings.settings_edit_avatar_change")}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("settings.settings_edit_name_label")}</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nickname">
            {t("settings.settings_edit_nickname_label")}
          </Label>
          <Input
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="course">
          {t("settings.settings_edit_course_label")}
        </Label>
        <select
          id="course"
          className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
          value={course}
          onChange={(e) => setCourse(e.target.value as Course)}
        >
          <option value="Beginner">{t("course.Beginner")}</option>
          <option value="Intermediate" disabled>
            {t("course.Intermediate")}
          </option>
          <option value="Advanced" disabled>
            {t("course.Advanced")}
          </option>
        </select>
      </div>
      <div className="flex gap-2 w-full justify-end items-center">
        <Button variant="default" type="submit" className="">
          {t("common.edit")}
        </Button>
        <Button
          variant="outline"
          type="button"
          className=""
          onClick={() => {
            setShowForm(false);
          }}
        >
          {t("common.cancel")}
        </Button>
      </div>
    </form>
  );
};

export default SettingsEditForm;
