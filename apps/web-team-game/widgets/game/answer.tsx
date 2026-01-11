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

const WRONG_ANSWER_ERROR_ID = 'f9590417-60c5-42ed-8c59-61ba6225d8d3'

export const Answer = ({
  qna,
  answerVariant,
  isLoading,
  onSuccess,
}: {
  qna: QNA
  answerVariant: QNA['answerVariants'][number]
  isLoading: boolean
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
        toast.dismiss(WRONG_ANSWER_ERROR_ID)
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
      toast.dismiss(WRONG_ANSWER_ERROR_ID)
      onSuccess()
    } else {
      setIsWrong(true)
    }
  }

  useEffect(() => {
    if (isWrong) {
      toast.error('Неверный ответ', {
        id: WRONG_ANSWER_ERROR_ID,
      })
    }
  }, [isWrong])

  return (
    <Card
      // @ts-expect-error drag ref type issue
      ref={isWrong || isLoading ? null : drag}
      data-testid='box'
      className={cn(
        'cursor-grab',
        isDragging && 'opacity-40 cursor-grabbing',
        isWrong && 'opacity-50 cursor-not-allowed',
        isLoading && 'opacity-40 cursor-wait',
      )}>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            onClick={handleClick}
            title={isLoading ? 'Загрузка...' : undefined}
            disabled={isWrong || isLoading}
            className={cn(
              'min-h-11 text-lg',
              (isWrong || isLoading) && 'cursor-not-allowed',
            )}>
            {answerVariant}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
