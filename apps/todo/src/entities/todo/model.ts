import * as z from 'zod'

export const CONTENT_MAX = 1048576

export const todoSchema = z.object({
  id: z.uuidv4(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deadline: z.date(),
  priority: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]),
  client: z.union([
    z.literal('mtsbank'),
    z.literal('northcode'),
    z.literal('start-fit'),
  ]),
  label: z
    .string()
    .min(1, 'Content must be at least 1 character')
    .max(32, 'Content must be at most 32 characters'),
  content: z
    .string()
    .min(1, 'Content must be at least 1 character')
    .max(CONTENT_MAX, `Content must be at most ${CONTENT_MAX} characters`),
  isDone: z.boolean(),
})

export const clientTodoSchema = todoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const todoStoreSchema = z.object({
  todo: z.object({
    todos: z.array(todoSchema),
    setTodos: z.function({
      input: [z.array(todoSchema)],
      output: z.void(),
    }),
    addTodo: z.function({
      input: [todoSchema],
      output: z.void(),
    }),
    updateTodo: z.function({
      input: [
        todoSchema.shape.id,
        todoSchema
          .omit({
            id: true,
            createdAt: true,
          })
          .partial({
            updatedAt: true,
            deadline: true,
            priority: true,
            client: true,
            label: true,
            content: true,
            isDone: true,
          }),
      ],
      output: z.void(),
    }),
    toggleTodo: z.function({
      input: [todoSchema.shape.id],
      output: z.void(),
    }),
    removeTodo: z.function({
      input: [todoSchema.shape.id],
      output: z.void(),
    }),
  }),
})

export type Todo = z.infer<typeof todoSchema>

export type ClientTodo = z.infer<typeof clientTodoSchema>

export type TodoStore = z.infer<typeof todoStoreSchema>
