'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { Answer } from '@/widgets/game/answer'
import { Question } from '@/widgets/game/question'
import { cn } from '@/shared/utils'
import { Span } from '@repo/ui/components/tags/span'
import { useQNAs } from '@/entities/qnas/hooks/useQNAs'
import { LoadingIcon } from '@/shared/components/loading-icon'
import { useIncrementScore } from '@/entities/player/hooks/use-increment-score'
import { useEffect } from 'react'
import { usePlayer } from '@/entities/player/hooks/usePlayer'

export const Game = ({ username }: { username: string }) => {
  const { QNAs = [], areQNAsLoading } = useQNAs()
  const { player, isPlayerLoading } = usePlayer(username)
  const {
    incrementScore,
    isIncrementScoreMutating,
    triggerIncrementScore,
    resetIncrementScore,
  } = useIncrementScore()

  const playerScore = player?.score

  useEffect(() => {
    if (playerScore === 0) resetIncrementScore()
  }, [playerScore, resetIncrementScore])

  const isLoading = areQNAsLoading || isPlayerLoading

  if (isLoading) return <LoadingIcon />

  const score = incrementScore || playerScore || 0

  const isFinished = QNAs.length > 0 && score === QNAs.length

  const onSuccess = () => {
    triggerIncrementScore(username)
  }

  return (
    <Div className='flex flex-col'>
      {isFinished ? (
        <Div className='font-bold text-2xl'>Поздравляем! Вы прошли игру!</Div>
      ) : (
        <Span className='flex justify-center items-center text-center'>
          Задача {(score || 0) + 1} из {QNAs.length}
        </Span>
      )}
      {QNAs.map((qna, index) => (
        <Div
          key={qna.question}
          className={cn(
            score === index ? 'flex flex-col gap-6 mt-2' : 'hidden',
          )}>
          <Question qna={qna} />
          <Div className='flex flex-row flex-wrap justify-center items-center gap-4 mx-auto'>
            {qna.answerVariants.map(answerVariant => (
              <Answer
                key={answerVariant}
                qna={qna}
                answerVariant={answerVariant}
                isLoading={isIncrementScoreMutating}
                onSuccess={onSuccess}
              />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  )
}
