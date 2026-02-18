// atoms
import { useAtomValue } from "jotai";
import { currentUserAtom } from "~/data/userData";
// shadcn/ui
import { Separator } from "~/components/ui/separator";
// components
import HomeSelectCourse from "~/components/Home/HomeSelectCourse";
import HomeNotice from "~/components/Home/HomeNotice";
import HomeBottom from "~/components/Home/HomeBottom";
// icons
import { FaReact } from "react-icons/fa";
// styles
import { H1_STYLE, H3_STYLE } from "~/style/commonStyle";
import { SEPERATOR_STYLE } from "~/style/homeStyle";
// i18n
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const currentUser = useAtomValue(currentUserAtom);

  return (
    <main className="p-8 flex flex-col justify-center items-center gap-2">
      {/* 메인화면 - 헤더 */}
      <h1 className={`${H1_STYLE}` + " flex items-center gap-3 tracking-wide"}>
        <FaReact id="react-icon" className="text-blue-600 animate-spin" />
        <span>React Learning</span>
      </h1>

      <Separator className={SEPERATOR_STYLE} />

      {/* 메인화면 - 환영인사 & 강의코스 선택 */}
      {currentUser && (
        <>
          <h3 className={`${H3_STYLE}`}>
            {t("home_message.welcome")} {currentUser?.name}!
          </h3>
          <HomeSelectCourse />
        </>
      )}

      <Separator className={SEPERATOR_STYLE} />

      {/* 메인화면 - 공지사항 */}
      <HomeNotice />

      <Separator className={SEPERATOR_STYLE} />

      {/* 메인화면 - 버튼그룹 */}
      <HomeBottom />
    </main>
  );
}
