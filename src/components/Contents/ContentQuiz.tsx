// react
import { useState } from "react";
// atoms
import { useAtom, useSetAtom } from "jotai";
import type { MultipleChoiceQuiz, ShortAnswerQuiz } from "~/data/contentData";
import { currentUserAtom } from "~/data/userData";
import {
  displayedCorrectAnswerAtom,
  isCorrectAtom,
  isSubmittedAtom,
  showFeedbackAtom,
  userAnswersAtom,
} from "~/data/quizData";
// shadcn/ui
import { Button } from "../ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
// components
import { LevelUpModal } from "./LevelUpModal";
// helpers
import { cn } from "~/lib/utils";
import { checkShortAnswer } from "~/lib/helper";
// firebase
import { completeLectureForUser } from "~/lib/firestore_utils";
import { Label } from "../ui/label";
import { useTranslation } from "react-i18next";

interface ContentQuizProps {
  quiz: MultipleChoiceQuiz | ShortAnswerQuiz;
}

export default function ContentQuiz({ quiz }: ContentQuizProps) {
  const { t } = useTranslation();

  const [userAnswer, setUserAnswer] = useAtom(userAnswersAtom);
  const [isSubmitted, setIsSubmitted] = useAtom(isSubmittedAtom);
  const [isCorrect, setIsCorrect] = useAtom(isCorrectAtom);
  const [showFeedback, setShowFeedback] = useAtom(showFeedbackAtom);
  const setDisplayedCorrectAnswer = useSetAtom(displayedCorrectAnswerAtom);

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswerChange = (value: string) => {
    if (!isSubmitted) {
      setUserAnswer(value);
    }
  };

  const handleSubmit = async () => {
    console.log(quiz.question);
    try {
      setIsSubmitted(true);
      setShowFeedback(true);

      let correct = false;
      if (quiz.type === 1) {
        // MultipleChoiceQuiz
        const selectedIndex = quiz.options.findIndex(
          (option) => option === userAnswer,
        );
        correct = selectedIndex === quiz.correctAnswerIndex;
      } else if (quiz.type === 2) {
        // ShortAnswerQuiz
        const { isCorrect: shortAnswerCorrect, firstCorrectAnswer } =
          checkShortAnswer(quiz.correctAnswer, userAnswer);
        correct = shortAnswerCorrect;
        setDisplayedCorrectAnswer(firstCorrectAnswer);
      }
      setIsCorrect(correct);

      if (correct) {
        if (
          currentUser?.contentStatus &&
          currentUser.contentStatus.has(quiz.id)
        ) {
          return;
        } else {
          const updatedUser = await completeLectureForUser(currentUser, quiz);
          if (updatedUser) {
            setCurrentUser(updatedUser);
          }
          setIsOpen(true);
        }
      }
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  const handleRetry = () => {
    setUserAnswer("");
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowFeedback(false);
    setDisplayedCorrectAnswer("");
  };

  const isButtonDisabled = !userAnswer || (isSubmitted && isCorrect);

  return (
    <div>
      {quiz.type === 1 && (
        <FieldSet className="w-full">
          <FieldLegend variant="legend" className="text-blue-500 font-bold italic">Quiz</FieldLegend>
          <FieldDescription>{quiz.question}</FieldDescription>
          <RadioGroup
            value={userAnswer}
            onValueChange={handleAnswerChange}
            disabled={isSubmitted}
          >
            {quiz.options.map((option, index) => (
              <Field orientation="horizontal" key={index}>
                <RadioGroupItem
                  value={option}
                  id={`${quiz.id}-${index}`}
                  className="bg-white"
                />
                <FieldLabel
                  htmlFor={`${quiz.id}-${index}`}
                  className={cn(
                    "font-normal",
                    showFeedback &&
                      isSubmitted &&
                      index === quiz.correctAnswerIndex &&
                      "text-green-600 font-bold",
                    showFeedback &&
                      isSubmitted &&
                      !isCorrect &&
                      option === userAnswer &&
                      "text-red-600",
                  )}
                >
                  {option}
                </FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
      )}

      {quiz.type === 2 && (
        <FieldSet>
          <FieldLegend variant="legend" className="text-blue-500 font-bold italic">Quiz</FieldLegend>
          <FieldLabel
            htmlFor={`quiz-input-${quiz.id}`}
            className="whitespace-pre-wrap"
          >
            {quiz.question}
          </FieldLabel>
          <Input
            id={`quiz-input-${quiz.id}`}
            className={cn(
              "max-w-sm bg-white",
              showFeedback && isSubmitted && isCorrect && "border-green-500",
              showFeedback && isSubmitted && !isCorrect && "border-red-500",
            )}
            type="text"
            placeholder={t("contents.answer_placeholder")}
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            disabled={isSubmitted}
          />
        </FieldSet>
      )}

      {showFeedback && isSubmitted && (
        <p
          className={cn(
            "text-lg font-semibold mt-4",
            isCorrect ? "text-green-600" : "text-red-600",
          )}
        >
          {isCorrect ? t("contents.correct") : t("contents.incorrect")}
        </p>
      )}

      {showFeedback && isSubmitted && (
        <Label className="flex flex-col items-start mt-4 text-s text-gray-600/85">
          <span className="text-sm font-bold">
            {t("contents.explanation_label")}
          </span>
          <span>{quiz.explanation}</span>
        </Label>
      )}

      <Button
        className="mt-4 float-right"
        onClick={isSubmitted && !isCorrect ? handleRetry : handleSubmit}
        disabled={isButtonDisabled}
      >
        {isSubmitted && !isCorrect
          ? t("contents.retry_label")
          : t("contents.submit_label")}
      </Button>
      <LevelUpModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        earnedExp={quiz ? quiz.exp : 0}
        currentTotalExp={currentUser ? currentUser.exp : 0}
      />
    </div>
  );
}
