// atoms
import { contentsAtom } from "~/data/contentData";
import { useAtomValue, useSetAtom } from "jotai";
import { isLoadingAtom } from "~/data/commonData";
// react-router
import { Link } from "react-router";
// shadcn/ui
import { Button } from "~/components/ui/button";
import { ButtonGroup } from "~/components/ui/button-group";
// icons
import { BookOpen, MessagesSquare } from "lucide-react";
// helpers
import { getFirstContentId } from "~/lib/helper";
// i18n
import { useTranslation } from "react-i18next";

export default function HomeBottom() {
  const { t } = useTranslation();

  const contents = useAtomValue(contentsAtom);
  const setIsLoading = useSetAtom(isLoadingAtom);

  return (
    <ButtonGroup className="gap-2">
      <Link
        to={`/contents/${getFirstContentId(contents)}`}
        prefetch="intent"
        onClick={() => setIsLoading(true)}
      >
        <Button>
          <BookOpen className="w-4 h-4 mr-2" />
          <span>{t("home_message.go_to_lecture")}</span>
        </Button>
      </Link>
      <Link to="/community" prefetch="intent">
        <Button>
          <MessagesSquare className="w-4 h-4 mr-2" />
          <span>{t("home_message.go_to_community")}</span>
        </Button>
      </Link>
    </ButtonGroup>
  );
}
