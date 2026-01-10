'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { Answer } from '@/features/answer'
import { Question } from '@/features/question'
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
          className={cn(qnaIndex === QNAs.indexOf(qna) ? 'block' : 'hidden')}>
          <Question qna={qna} />
          {qna.answerVariants.map(answerVariant => (
            <Answer
              key={answerVariant}
              qna={qna}
              answerVariant={answerVariant}
              onSuccess={onSuccess}
            />
          ))}
        </Div>
      ))}
    </Div>
  )
}
