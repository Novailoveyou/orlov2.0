'use client'
import 'client-only'

import { Div } from '@repo/ui/components/tags/div'
import { useDrag } from 'react-dnd'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/shadcnui/card'
import { Field } from '@repo/ui/components/shadcnui/field'
import { Button } from '@repo/ui/components/shadcnui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/shared/utils'
import { toast } from '@/shared/components/sonner'
import { QNA } from '@/generated/prisma/browser'

export const Answer = ({
  qna,
  answerVariant,
  onSuccess,
}: {
  qna: QNA
  answerVariant: QNA['answerVariants'][number]
  onSuccess: () => void
}) => {
  const [isWrong, setIsWrong] = useState(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: qna.question,
    item: { answerVariant },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ answer: string }>()

      if (monitor.didDrop() && dropResult?.answer !== answerVariant) {
        setIsWrong(true)
        return
      }

      if (monitor.didDrop() && item && dropResult) {
        onSuccess()
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const handleClick = () => {
    if (answerVariant === qna.answer) {
      onSuccess()
    } else {
      setIsWrong(true)
    }
  }

  useEffect(() => {
    if (isWrong) {
      toast.error('Неверный ответ')
    }
  }, [isWrong])

  return (
    <Card
      // @ts-expect-error drag ref type issue
      ref={isWrong ? null : drag}
      data-testid='box'
      className={cn(
        'cursor-grab',
        isDragging && 'opacity-40 cursor-grabbing',
        isWrong && 'opacity-50 cursor-not-allowed',
      )}>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            onClick={handleClick}
            disabled={isWrong}
            className={cn('text-lg', isWrong && 'cursor-not-allowed')}>
            {answerVariant}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
