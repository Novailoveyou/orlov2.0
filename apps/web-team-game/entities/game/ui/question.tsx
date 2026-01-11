'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { useDrop } from 'react-dnd'
import { QNA } from '@/shared/model'

export const Question = ({ qna }: { qna: QNA }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: qna.question,
    drop: () => ({ answer: qna.answer }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    // @ts-expect-error drag ref type issue
    <div ref={drop} style={{ backgroundColor }} data-testid='dustbin'>
      {qna.question}
    </div>
  )
}
