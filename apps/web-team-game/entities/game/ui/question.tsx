'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { useDrop } from 'react-dnd'
import { QNA } from '@/shared/model'
import { cn } from '@/shared/utils'

export const Question = ({ qna }: { qna: QNA }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: qna.question,
    drop: () => ({ answer: qna.answer }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  // const isActive = canDrop && isOver
  // let backgroundColor = '#222'

  return (
    <div
      // @ts-expect-error drag ref type issue
      ref={drop}
      data-testid='dustbin'
      className={cn(
        'mx-auto p-4 rounded-2xl max-w-max text-2xl text-center transition-transform cursor-help',
        isOver && 'scale-105 bg-secondary',
      )}>
      {qna.question}
    </div>
  )
}
