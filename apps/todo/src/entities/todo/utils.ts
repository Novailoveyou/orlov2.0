import type { Todo } from './model'
import { v4 as uuidv4 } from 'uuid'

export const createTodoMock = (
  id: Todo['id'] = uuidv4(),
  {
    createdAt = new Date(),
    updatedAt = new Date(),
    deadline = new Date(),
    priority = 2,
    client = 'mtsbank',
    label = '',
    content = '',
    isDone = false,
  }: Partial<Omit<Todo, 'id'>> = {
    createdAt: new Date(),
    updatedAt: new Date(),
    deadline: new Date(),
    priority: 2,
    client: 'mtsbank',
    label: '',
    content: '',
    isDone: false,
  },
) =>
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
  }) as const satisfies Todo

export const createSkeletons = (length: number) =>
  Array.from({ length }, _ => createTodoMock())
