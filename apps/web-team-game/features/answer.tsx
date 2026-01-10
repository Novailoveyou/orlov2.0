'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { useDrag } from 'react-dnd'
import { QNA } from '@/shared/model'

export const Answer = ({
  qna,
  answerVariant,
  onSuccess,
}: {
  qna: QNA
  answerVariant: QNA['answerVariants'][number]
  onSuccess: () => void
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: qna.question,
    item: { answerVariant },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ answer: string }>()

      if (dropResult?.answer !== answerVariant) {
        console.log('wrong')
        return
      }

      if (item && dropResult) {
        onSuccess()
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const opacity = isDragging ? 0.4 : 1

  const handleClick = () => {
    if (answerVariant === qna.answer) {
      onSuccess()
    } else {
      console.log('wrong')
    }
  }

  return (
    <Div
      // @ts-expect-error drag ref type issue
      ref={drag}
      style={{ opacity }}
      data-testid={`box`}
      onClick={handleClick}>
      {answerVariant}
    </Div>
  )
}
