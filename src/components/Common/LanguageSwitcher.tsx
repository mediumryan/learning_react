// shadcn/ui
import { Button } from "~/components/ui/button";
// atoms
import { useSetAtom } from "jotai";
import { languageAtom } from "~/data/commonData";
// i18n
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const setContentsLanguage = useSetAtom(languageAtom);

  const currentLanguage = i18n.language;

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setContentsLanguage(lng);
  };

  return (
    <div className="flex space-x-2 items-center justify-center">
      <Button
        variant="outline"
        onClick={() => toggleLanguage("ko")}
        className={`${currentLanguage === "ko" ? "font-bold text-blue-500" : ""}`}
      >
        한국어
      </Button>
      <Button
        variant="outline"
        onClick={() => toggleLanguage("ja")}
        className={`${currentLanguage === "ja" ? "font-bold text-blue-500" : ""}`}
      >
        日本語
      </Button>
    </div>
  );
}
