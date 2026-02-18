// shadcn/ui
import { Button } from "~/components/ui/button";
// atoms
import { useAtom } from "jotai";
import { languageAtom } from "~/data/commonData";
// i18n
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [contentsLanguage, setContentsLanguage] = useAtom(languageAtom);

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setContentsLanguage(lng);
  };

  return (
    <div className="flex space-x-2 items-center justify-center">
      <Button
        variant={contentsLanguage === "ko" ? "default" : "secondary"}
        onClick={() => toggleLanguage("ko")}
        className="font-bold"
      >
        한국어
      </Button>
      <Button
        variant={contentsLanguage === "ja" ? "default" : "secondary"}
        onClick={() => toggleLanguage("ja")}
        className="font-bold"
      >
        日本語
      </Button>
    </div>
  );
}
