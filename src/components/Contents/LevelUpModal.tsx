// react
import { useEffect, useState } from 'react';
// atoms
import { useAtomValue } from 'jotai';
import { currentUserAtom } from '~/data/userData';
// framer-motion
import { motion, AnimatePresence } from 'framer-motion';
// icons
import { ChevronRight, PartyPopper } from 'lucide-react';
// shadcn/ui
import { Progress } from '~/components/ui/progress';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '~/components/ui/dialog';
// helper
import { getGradeInfo, getIsLevelUp, getProgress } from '~/lib/helper';
import { cn } from '~/lib/utils';
import { useTranslation } from 'react-i18next';

interface LevelUpProps {
  isOpen: boolean;
  onClose: () => void;
  earnedExp: number;
  currentTotalExp: number;
}

export const LevelUpModal = ({
  isOpen,
  onClose,
  earnedExp,
  currentTotalExp,
}: LevelUpProps) => {
  const { t } = useTranslation();

  const currentUser = useAtomValue(currentUserAtom);
  const gradeInfo = getGradeInfo(currentUser?.grade || 'Bronze');

  // 1. 숫자 카운팅 애니메이션 로직
  const [displayExp, setDisplayExp] = useState(0);

  const isLevelUp = getIsLevelUp(currentTotalExp, earnedExp);

  useEffect(() => {
    if (isOpen) {
      let start = 0;
      const duration = 1000;
      const increment = earnedExp / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= earnedExp) {
          setDisplayExp(earnedExp);
          clearInterval(timer);
        } else {
          setDisplayExp(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      setDisplayExp(0);
    }
  }, [isOpen, earnedExp]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-none bg-slate-950 text-white overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)]">
        {/* 상단 장식 빛 효과 */}
        <div
          className={cn(
            'absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent to-transparent transition-all duration-1000',
            isLevelUp
              ? 'via-yellow-400 h-2 opacity-100'
              : 'via-blue-400 opacity-50',
          )}
        />

        <DialogHeader className="flex flex-col items-center justify-center pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUser?.grade}
              initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative mb-6"
            >
              {/* 승급 시 배경 후광 효과 */}
              {isLevelUp && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"
                />
              )}

              {currentUser && (
                <img
                  src={gradeInfo.badge}
                  alt="user medal"
                  className={cn(
                    'relative z-10 min-w-64 h-32',
                    isLevelUp && 'drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]',
                  )}
                />
              )}
            </motion.div>
          </AnimatePresence>

          <DialogTitle className="text-3xl font-black tracking-tight flex items-center gap-2">
            {isLevelUp ? (
              <>
                <PartyPopper className="text-yellow-400 w-8 h-8" />
                RANK UP!
                <PartyPopper className="text-yellow-400 w-8 h-8" />
              </>
            ) : (
              t('contents.complete_title')
            )}
          </DialogTitle>
          <DialogDescription className="text-slate-400 mt-1">
            {isLevelUp
              ? `${t('contents.complete_levelup_message_1')} ${currentUser?.grade} ${t('contents.complete_levelup_message_2')}`
              : t('contents.complete_message')}
          </DialogDescription>
        </DialogHeader>

        <div className="py-8 space-y-8">
          {/* 경험치 획득 애니메이션 숫자 */}
          <div className="flex justify-center items-center flex-col">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-baseline space-x-2"
            >
              <span
                className={cn('text-6xl font-black italic', gradeInfo.color)}
              >
                +{displayExp}
              </span>
              <span className="text-2xl font-bold text-slate-600">EXP</span>
            </motion.div>
          </div>

          {/* 등급 진행도 섹션 */}

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className={`${gradeInfo.color} font-bold`}>
                {currentUser?.grade.toUpperCase()}
              </span>

              <span className="text-slate-400">
                {currentUser?.exp || 0} / {gradeInfo.maxExp} EXP
              </span>
            </div>

            <Progress
              value={getProgress(
                currentUser?.grade || 'Bronze',
                currentUser?.exp || 0,
              )}
              className="h-2 bg-slate-800"
            />

            <p className="text-xs text-center text-slate-500 pt-1">
              {t('contents.complete_next_level_message_1')}{' '}
              <strong className={`${gradeInfo.color}`}>
                {gradeInfo.maxExp - (currentUser?.exp || 0)} EXP
              </strong>{' '}
              {t('contents.complete_next_level_message_2')}
            </p>
          </div>
        </div>

        <DialogFooter className="pb-4">
          <Button
            onClick={onClose}
            className={cn(
              'w-full py-7 text-xl font-black transition-all duration-300 group',
              isLevelUp
                ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                : 'bg-white hover:bg-slate-200 text-slate-900',
            )}
          >
            {t('contents.complete_continue_button')}
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
