'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { Answer } from '@/entities/game/ui/answer'
import { Question } from '@/entities/game/ui/question'
import { useState } from 'react'
import { cn } from '@/shared/utils'
import { QNAs } from '@/shared/model'

export const Game = () => {
  const [qnaIndex, setQnaIndex] = useState(0)

  const onSuccess = () => {
    setQnaIndex(prev => {
      const nextIndex = prev + 1
      if (nextIndex >= QNAs.length) {
        return -1
      }
      return nextIndex
    })
  }

  return (
    <Div>
      {qnaIndex === -1 && (
        <Div className='font-bold text-2xl'>Поздравляем! Вы прошли игру!</Div>
      )}
      {QNAs.map(qna => (
        <Div
          key={qna.question}
          className={cn(
            qnaIndex === QNAs.indexOf(qna) ? 'flex flex-col gap-8' : 'hidden',
          )}>
          <Question qna={qna} />
          <Div className='flex flex-row flex-wrap gap-4'>
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
