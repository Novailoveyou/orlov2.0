import { v4 as uuidv4 } from 'uuid'
import { useStore } from '@/app/store'
import useSWRMutation from 'swr/mutation'
import useSWR from 'swr'
import { createTodoMock } from './utils'
import { useIndexedDBTodos } from './api'
import useLocalStorage from 'use-local-storage'
import { LS_TODOS_LENGTH_KEY } from './constants'

export const useLSTodosLength = (length = 0) => {
  const [todosLength, setTodosLength] = useLocalStorage(
    LS_TODOS_LENGTH_KEY,
    length,
  )

  return { todosLength, setTodosLength }
}

export const useTodos = () => {
  const { getTodos } = useIndexedDBTodos()

  const todos = useStore(state => state.todo.todos)
  const setTodos = useStore(state => state.todo.setTodos)

  const { setTodosLength } = useLSTodosLength(todos.length)

  const { error, isLoading, isValidating, mutate } = useSWR(
    '/todos',
    getTodos,
    {
      onSuccess: todo => {
        setTodos(todo)
        setTodosLength(todo.length)
      },
      optimisticData: todos,
      fallbackData: todos,
    },
  )

  return {
    todos,
    todosError: error,
    areTodosLoading: isLoading,
    areTodosValidating: isValidating,
    mutateTodos: mutate,
  }
}

export const useAddTodo = () => {
  const { addTodo } = useIndexedDBTodos()

  const addTodoToStore = useStore(state => state.todo.addTodo)
  const { setTodosLength } = useLSTodosLength()

  const { data, error, isMutating, reset, trigger } = useSWRMutation(
    '/add-todo',
    addTodo,
    {
      onSuccess: todo => {
        addTodoToStore(todo)
        setTodosLength(prev => (prev || 0) + 1)
      },
      optimisticData: data => data || createTodoMock(uuidv4()),
      rollbackOnError: true,
    },
  )

  return {
    addedTodo: data,
    addedTodoError: error,
    isAddedTodoMutating: isMutating,
    resetAddTodo: reset,
    triggerAddTodo: trigger,
  }
}

export const useUpdateTodo = () => {
  const { updateTodo } = useIndexedDBTodos()

  const updateTodoInStore = useStore(state => state.todo.updateTodo)

  const { data, error, isMutating, reset, trigger } = useSWRMutation(
    '/update-todo',
    updateTodo,
    {
      onSuccess: todo => {
        if (!todo) return
        updateTodoInStore(todo.id, todo)
      },
      rollbackOnError: true,
    },
  )

  return {
    updatedTodo: data,
    updatedTodoError: error,
    isUpdatedTodoMutating: isMutating,
    resetUpdateTodo: reset,
    triggerUpdateTodo: trigger,
  }
}

export const useToggleTodo = () => {
  const { toggleTodo } = useIndexedDBTodos()

  const toggleTodoInStore = useStore(state => state.todo.toggleTodo)

  const { data, error, isMutating, reset, trigger } = useSWRMutation(
    '/update-todo',
    toggleTodo,
    {
      onSuccess: todo => {
        if (!todo) return
        toggleTodoInStore(todo.id)
      },
      rollbackOnError: true,
    },
  )

  return {
    toggledTodo: data,
    toggledTodoError: error,
    isToggledTodoMutating: isMutating,
    resetToggleTodo: reset,
    triggerToggleTodo: trigger,
  }
}
