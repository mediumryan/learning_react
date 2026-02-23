// react
import { useEffect, useRef, useState } from "react";
// react-router
import { Link, useParams } from "react-router";
// atoms
import { useAtomValue } from "jotai";
import { currentUserAtom } from "~/data/userData";
import { contentsAtom } from "~/data/contentData";
// icons
import { BookOpen, CheckCircle2, Clock } from "lucide-react";
import { FaReact } from "react-icons/fa";
// shadcn/ui
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";
import { Progress } from "~/components/ui/progress";
import { Label } from "../ui/label";
// helpers
import {
  calculateTotalTime,
  getSectionProgress,
  groupContentBySection,
  isCompleteCourse,
  mappingTitlebySection,
} from "~/lib/helper";
import { cn } from "~/lib/utils";

export function AppSidebar() {
  const lectureId = useParams().id;

  const { isMobile, setOpenMobile } = useSidebar();
  const sideBarItemRef = useRef<HTMLLIElement>(null);

  const currentUser = useAtomValue(currentUserAtom);

  const [progress, setProgress] = useState(0);

  const contents = useAtomValue(contentsAtom);

  const headerD = groupContentBySection(contents);

  const handleMenuItemClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  useEffect(() => {
    const contentLength = contents?.length || 0;
    if (!currentUser || !contents) return;
    const completedCount = currentUser.contentStatus.size || 0;
    const calculatedProgress = Math.floor(
      (completedCount / contentLength) * 100,
    );
    setProgress(calculatedProgress);
  }, [currentUser, contents]);

  useEffect(() => {
    if (!sideBarItemRef.current) return;

    sideBarItemRef.current.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [lectureId]);

  return (
    <Sidebar className="">
      <SidebarHeader className="p-4">
        <Link to="/">
          <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight">
            <FaReact id="react-icon" className="text-blue-600 animate-spin" />
            <span>{currentUser?.course} Class</span>
          </h2>
        </Link>
        <div className="flex items-center gap-2">
          <Progress value={progress} className="w-full" />
          <p className="text-xs text-muted-foreground">{progress}%</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {headerD.map((section) => (
          <SidebarGroup key={`section${section[0].section}`}>
            <div className="flex flex-col gap-2 group/label px-2 pb-2 mb-3 text-sm w-full ">
              {/* TEST */}
              <div className="flex items-center gap-2 text-[10px] text-gray-400">
                <span className="flex items-center gap-0.5">
                  <BookOpen className="w-3 h-3" /> {contents.length}
                </span>
                <span className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3" /> {calculateTotalTime(contents)}m
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col text-blue-400 font-bold">
                  <span>{`Section ${section[0].section}`}</span>
                  <span className="text-sm text-gray-400 italic">
                    {mappingTitlebySection(section[0].section)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                  <span className="flex items-center gap-0.5">
                    <BookOpen className="w-3 h-3" /> {section.length}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-3 h-3" /> {calculateTotalTime(section)}m
                  </span>
                </div>
              </div>
              <Progress
                value={getSectionProgress(section, currentUser)}
                className="w-full h-1 transition-all duration-300 ease-in-out"
                indicatorClassName="bg-blue-500"
              />
            </div>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.map((content) => (
                  <SidebarMenuItem
                    key={content.id}
                    ref={lectureId === content.id ? sideBarItemRef : null}
                    className="content-sidebar px-2"
                    onClick={handleMenuItemClick}
                  >
                    <Link
                      to={`/contents/${content.id}`}
                      className="flex flex-col justify-between w-full"
                    >
                      <>
                        <SidebarMenuButton
                          isActive={lectureId === content.id}
                          className={cn(
                            "transition-colors hover:opacity-75 duration-300",
                          )}
                        >
                          {content.type === 0 ? (
                            <BookOpen
                              fill={
                                isCompleteCourse(content, currentUser)
                                  ? "#51a2ff"
                                  : "none"
                              }
                              className={cn(
                                "w-4 h-4 mr-2",
                                isCompleteCourse(content, currentUser)
                                  ? "text-gray-200"
                                  : "",
                              )}
                            />
                          ) : (
                            <CheckCircle2
                              fill={
                                isCompleteCourse(content, currentUser)
                                  ? "#51a2ff"
                                  : "none"
                              }
                              className={cn(
                                "w-4 h-4 mr-2",
                                isCompleteCourse(content, currentUser)
                                  ? "text-gray-200"
                                  : "",
                              )}
                            />
                          )}
                          <span
                            className={cn(
                              "text-xs",
                              isCompleteCourse(content, currentUser) &&
                                "opacity-50",
                            )}
                          >
                            {content.title}
                          </span>
                        </SidebarMenuButton>
                      </>
                      <div className="flex justify-between items-center mt-1 px-1">
                        <Label className="text-[0.65rem] text-gray-400/70">
                          {content.exp} XP
                        </Label>
                        <Label className="text-[0.65rem] text-gray-400/70">
                          {content.time}min
                        </Label>
                      </div>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

{
  /* <div className="flex flex-col items-end gap-2 text-[10px] text-gray-400">
  <span className="flex items-center gap-0.5">
    <BookOpen className="w-3 h-3" /> {section.length}
  </span>
  <span className="flex items-center gap-0.5">
    <Clock className="w-3 h-3" /> {calculateTotalTime(section)}m
  </span>
</div>; */
}
