import { v4 as uuidv4 } from 'uuid'
import { useIndexedDBStore } from 'use-indexeddb'
import type { ClientTodo, Todo } from './model'
import { handleError } from '@/shared/utils'

export const useIndexedDBTodos = () => {
  const { getAll, add, getByID, update, deleteByID } =
    useIndexedDBStore<Todo>('todos')

  const getTodos = async () => await getAll()

  const addTodo = async (
    _: string,
    {
      arg: clientTodo,
    }: {
      arg: ClientTodo
    },
  ) => {
    const date = new Date()

    const todo = {
      id: uuidv4(),
      createdAt: date,
      updatedAt: date,
      ...clientTodo,
    } as const satisfies Todo

    await add(todo).catch(handleError)

    return todo
  }

  const updateTodo = async (
    _: string,
    {
      arg: { id, clientTodo },
    }: {
      arg: { id: Todo['id']; clientTodo: Partial<ClientTodo> }
    },
  ) => {
    const currentTodo = await getByID(id)

    if (!currentTodo) return

    const todo = {
      ...currentTodo,
      updatedAt: new Date(),
      ...clientTodo,
    } as const satisfies Todo

    await update(todo).catch(handleError)

    return todo
  }

  const toggleTodo = async (
    _: string,
    {
      arg: id,
    }: {
      arg: Todo['id']
    },
  ) => {
    const currentTodo = await getByID(id)

    if (!currentTodo) return

    const todo = {
      ...currentTodo,
      updatedAt: new Date(),
      isDone: !currentTodo.isDone,
    } as const satisfies Todo

    await update(todo).catch(handleError)

    return todo
  }

  const removeTodo = async (
    _: string,
    {
      arg: todoId,
    }: {
      arg: Todo['id']
    },
  ) => {
    const response = await deleteByID(todoId).catch(handleError)

    return response
  }

  return { getTodos, addTodo, updateTodo, toggleTodo, removeTodo }
}
