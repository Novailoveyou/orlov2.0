'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { Answer } from '@/entities/game/ui/answer'
import { Question } from '@/entities/game/ui/question'
import { useState } from 'react'
import { cn } from '@/shared/utils'
import { Span } from '@repo/ui/components/tags/span'
import { useQNAs } from '@/entities/qnas/hooks/useQNAs'
import { LoadingIcon } from '@/shared/components/loading-icon'

export const Game = () => {
  const [qnaIndex, setQnaIndex] = useState(0)

  const { QNAs = [], areQNAsLoading } = useQNAs()

  const onSuccess = () => {
    setQnaIndex(prev => {
      const nextIndex = prev + 1
      if (nextIndex >= QNAs.length) {
        return -1
      }
      return nextIndex
    })
  }

  if (areQNAsLoading) return <LoadingIcon />

  return (
    <Div className='flex flex-col'>
      {qnaIndex === -1 && (
        <Div className='font-bold text-2xl'>Поздравляем! Вы прошли игру!</Div>
      )}
      <Span className='flex justify-center items-center text-center'>
        Задача {qnaIndex + 1} из {QNAs.length}
      </Span>
      {QNAs.map(qna => (
        <Div
          key={qna.question}
          className={cn(
            qnaIndex === QNAs.indexOf(qna)
              ? 'flex flex-col gap-6 mt-2'
              : 'hidden',
          )}>
          <Question qna={qna} />
          <Div className='flex flex-row flex-wrap justify-center items-center gap-4 mx-auto'>
            {qna.answerVariants.map(answerVariant => (
              <Answer
                key={answerVariant}
                qna={qna}
                answerVariant={answerVariant}
                onSuccess={onSuccess}
              />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  )
}
