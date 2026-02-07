import { useLSTodosLength, useTodos, useToggleTodo } from '../hooks'
import Markdown from 'react-markdown'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { cn } from '@/shared/lib/utils'
import { Time } from '@/shared/components/time'
import { VisuallyHidden } from 'radix-ui'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import sortBy from 'lodash/sortBy'
import { isBefore, isToday } from 'date-fns'
import { Button } from '@/shared/components/ui/button'
import { createSkeletons } from '../utils'

export const Todos = () => {
  const { todos, areTodosLoading, areTodosValidating } = useTodos()
  const { triggerToggleTodo } = useToggleTodo()
  const { todosLength } = useLSTodosLength()

  const sortedTodos = sortBy(
    sortBy(
      sortBy(
        todos.map(todo => {
          const deadline = new Date(todo.deadline)
          deadline.setHours(0, 0, 0, 0)
          return { ...todo, deadline }
        }),
        todo => todo.priority,
      ),
      todo => todo.deadline,
    ),
    todo => (todo.isDone ? 1 : -1),
  )

  return (
    <>
      <h2 className='mb-4'>Todos</h2>
      <div className='flex flex-col flex-wrap gap-4'>
        {(areTodosLoading
          ? createSkeletons(todosLength || 10)
          : sortedTodos
        ).map(
          ({
            id,
            createdAt,
            updatedAt,
            deadline,
            priority,
            client,
            label,
            content,
            isDone,
          }) => (
            <div
              key={id}
              id={id}
              className={cn(
                areTodosValidating && !areTodosLoading && 'opacity-75',
                isDone && 'opacity-50',
              )}>
              {areTodosLoading ? (
                <Skeleton className='min-h-47.5' />
              ) : (
                <Card className={'p-4 w-full'}>
                  <VisuallyHidden.Root>
                    <CardHeader>
                      <CardTitle>{id}</CardTitle>
                      <CardDescription>{id}</CardDescription>
                    </CardHeader>
                  </VisuallyHidden.Root>
                  <CardContent className='flex flex-col gap-4'>
                    <div className='flex flex-wrap justify-between gap-2'>
                      <div className='flex flex-col flex-wrap'>
                        <span>Priority: {priority}</span>
                        <span>Client: {client}</span>
                        <span>Label: {label}</span>
                      </div>
                      <div className='flex flex-col flex-wrap'>
                        <Time
                          label='Deadline'
                          date={deadline}
                          className={cn(
                            isBefore(deadline, new Date()) &&
                              'bg-destructive px-2 text-primary-foreground dark:text-primary',
                            isToday(deadline) &&
                              'bg-accent-foreground px-2 text-accent dark:text-accent',
                            'rounded-xl',
                          )}
                        />
                        <Time label='Created at' date={createdAt} />
                        <Time label='Updated at' date={updatedAt} />
                      </div>
                    </div>
                    <Markdown>{content}</Markdown>
                  </CardContent>
                  <CardFooter className='flex justify-end'>
                    <Button
                      variant='ghost'
                      onClick={() => triggerToggleTodo(id)}>
                      {isDone ? 'Undone' : 'Done'}
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
          ),
        )}
      </div>
    </>
  )
}
