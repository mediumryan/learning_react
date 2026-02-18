import type { Content } from "~/data/contentData";
import type { Grade, User } from "~/data/userData";
// images
import bronzeBadge from "~/assets/images/grades/bronze.png";
import silverBadge from "~/assets/images/grades/silver.png";
import goldBadge from "~/assets/images/grades/gold.png";
import platinumBadge from "~/assets/images/grades/platinum.png";
import diamondBadge from "~/assets/images/grades/diamond.png";
import type { PostType } from "~/data/postData";

interface GradeInfo {
  nextGrade: Grade | "Max";
  maxExp: number;
  minExp: number;
  color: string;
  badge: string;
}

export const getFirstContentId = (contentList: Content[]) => {
  if (contentList.length === 0) return null;
  return contentList[0].id;
};

export const getLastContentId = (contentList: Content[]) => {
  if (contentList.length === 0) return null;
  return contentList[contentList.length - 1].id;
};

export const getNextContentId = (contentList: Content[], currentId: string) => {
  const currentLesson = contentList.find((item) => item.id === currentId);
  if (!currentLesson) return null;

  const sameSectionNextLesson = contentList.find(
    (item) =>
      item.section === currentLesson.section &&
      item.order === currentLesson.order + 1,
  );
  if (sameSectionNextLesson) return sameSectionNextLesson.id;
  const nextSectionFirstLesson = contentList.find(
    (item) => item.section === currentLesson.section + 1 && item.order === 0,
  );
  if (nextSectionFirstLesson) return nextSectionFirstLesson.id;
  return null;
};

export const getPreviousContentId = (
  contentList: Content[],
  currentId: string,
) => {
  const currentLesson = contentList.find((item) => item.id === currentId);
  if (!currentLesson) return null;
  const sameSectionPrevLesson = contentList.find(
    (item) =>
      item.section === currentLesson.section &&
      item.order === currentLesson.order - 1,
  );
  if (sameSectionPrevLesson) return sameSectionPrevLesson.id;
  const prevSectionLessons = contentList
    .filter((item) => item.section === currentLesson.section - 1)
    .sort((a, b) => b.order - a.order);
  if (prevSectionLessons.length > 0) return prevSectionLessons[0].id;
  return null;
};

export const mappingTitlebySection = (section: number) => {
  switch (section) {
    case 1:
      return "Section 1 : What is React?";
    case 2:
      return "Section 2 : Basic React Concepts";
    case 3:
      return "Section 3 : State";
    case 4:
      return "Section 4 : Props";
    case 5:
      return "Section 5 : Events";
    case 6:
      return "Section 6 : Lists / Objects";
    case 7:
      return "Section 7 : Forms";
    case 8:
      return "Section 8 : Todo List Project";
    case 9:
      return "Section 9 : Deployment";
    case 10:
      return "+ Bonus : Lifecycle";
    default:
      return "";
  }
};

export const groupContentBySection = (contentList: Content[]) => {
  // section별로 그룹화
  const groupedBySection = Object.values(
    contentList.reduce((acc: Record<number, typeof contentList>, item) => {
      if (!acc[item.section]) acc[item.section] = [];
      acc[item.section].push(item);
      return acc;
    }, {}),
  );

  // 각 섹션 안에서 order 기준으로 정렬 (선택)
  groupedBySection.forEach((sectionArray) => {
    sectionArray.sort((a, b) => a.order - b.order);
  });
  return groupedBySection;
};

export const isCompleteCourse = (
  content: Content,
  currentUser: User | null,
) => {
  if (!currentUser) return false;
  return currentUser.contentStatus.has(content.id);
};

export const checkShortAnswer = (
  correctAnswerString: string,
  userAnswer: string,
) => {
  const possibleAnswers = correctAnswerString
    .split(",,")
    .map((ans) => ans.trim().toLowerCase());

  const normalizedUserAnswer = userAnswer.trim().toLowerCase();

  const isCorrect = possibleAnswers.some((ans) => ans === normalizedUserAnswer);

  // Return the first possible answer for feedback
  const firstCorrectAnswer = possibleAnswers[0] || "";

  return { isCorrect, firstCorrectAnswer };
};

export const GRADE_CONFIG: Record<Grade, GradeInfo> = {
  Bronze: {
    nextGrade: "Silver",
    minExp: 0,
    maxExp: 500,
    color: "text-orange-800",
    badge: bronzeBadge,
  },
  Silver: {
    nextGrade: "Gold",
    minExp: 500,
    maxExp: 1200,
    color: "text-slate-400",
    badge: silverBadge,
  },
  Gold: {
    nextGrade: "Platinum",
    minExp: 1200,
    maxExp: 2800,
    color: "text-yellow-500",
    badge: goldBadge,
  },
  Platinum: {
    nextGrade: "Diamond",
    minExp: 2800,
    maxExp: 5000,
    color: "text-purple-400",
    badge: platinumBadge,
  },
  Diamond: {
    nextGrade: "Max",
    minExp: 5000,
    maxExp: 5000,
    color: "text-blue-400",
    badge: diamondBadge,
  },
};

export const calculateGrade = (totalExp: number): Grade => {
  if (totalExp >= 5000) return "Diamond";
  if (totalExp >= 2800) return "Platinum";
  if (totalExp >= 1200) return "Gold";
  if (totalExp >= 500) return "Silver";
  return "Bronze";
};

export const getGradeInfo = (grade: Grade) => GRADE_CONFIG[grade];

export const getProgress = (grade: Grade, exp: number) => {
  const config = GRADE_CONFIG[grade];
  if (grade === "Diamond") return 100;

  const currentRangeExp = exp;
  const totalRangeExp = config.maxExp;

  const result = Math.min(
    Math.max((currentRangeExp / totalRangeExp) * 100, 0),
    100,
  );
  return result;
};

export const getIsLevelUp = (
  currentExp: number,
  earnedExp: number,
): boolean => {
  // 1. 기존 경험치 기준의 등급
  const previousGrade = calculateGrade(currentExp - earnedExp);
  // 2. 경험치를 더한 후의 새로운 등급
  const newGrade = calculateGrade(currentExp);
  // 3. 두 등급이 다르면 승급(Level Up) 성공!
  return previousGrade !== newGrade;
};

export const isNewPost = (post: PostType) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  return post.createdAt >= oneWeekAgo;
};
