'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { useDrag } from 'react-dnd'
import { QNA } from '@/shared/model'

export const Answer = ({
  qna,
  answer,
  onSuccess,
}: {
  qna: QNA
  answer: QNA['answers'][number]
  onSuccess: () => void
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: qna.question,
    item: { answer },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ answer: string }>()

      if (dropResult?.answer !== answer) {
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

  return (
    // @ts-expect-error drag ref type issue
    <Div ref={drag} style={{ opacity }} data-testid={`box`}>
      {answer}
    </Div>
  )
}
