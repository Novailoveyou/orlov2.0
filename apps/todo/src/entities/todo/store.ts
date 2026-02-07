import { createSlice } from '@/app/store'
import { createIndexedDB } from '@/app/indexeddb'
import { type TodoStore } from './model'

export const todoSlice = createSlice<TodoStore>(set => ({
  todo: {
    todos: [],
    setTodos: todos =>
      set(state => {
        state.todo.todos = todos
      }),
    addTodo: todo =>
      set(state => {
        state.todo.todos.push(todo)
      }),
    updateTodo: (id, newTodo) =>
      set(state => {
        const todoIndex = state.todo.todos.findIndex(todo => todo.id === id)

        if (todoIndex === -1) return

        state.todo.todos[todoIndex] = {
          ...state.todo.todos[todoIndex],
          ...newTodo,
        }
      }),
    toggleTodo: id =>
      set(state => {
        const todoIndex = state.todo.todos.findIndex(todo => todo.id === id)

        if (todoIndex === -1) return

        state.todo.todos[todoIndex] = {
          ...state.todo.todos[todoIndex],
          isDone: !state.todo.todos[todoIndex].isDone,
        }
      }),
    removeTodo: todoId =>
      set(state => {
        state.todo.todos = state.todo.todos.filter(todo => todo.id !== todoId)
      }),
  },
}))

export const todoIndexedDB = createIndexedDB({
  databaseName: 'todo',
  version: 1,
  stores: [
    {
      name: 'todos',
      id: { keyPath: 'id', autoIncrement: false },
      indices: [
        {
          name: 'createdAt',
          keyPath: 'createdAt',
          options: { unique: false },
        },
        {
          name: 'updatedAt',
          keyPath: 'updatedAt',
          options: { unique: false },
        },
        {
          name: 'deadline',
          keyPath: 'deadline',
          options: { unique: false },
        },
        {
          name: 'priority',
          keyPath: 'priority',
          options: { unique: false },
        },
        {
          name: 'client',
          keyPath: 'client',
          options: { unique: false },
        },
        {
          name: 'label',
          keyPath: 'label',
          options: { unique: false },
        },
        { name: 'content', keyPath: 'content', options: { unique: false } },
        { name: 'isDone', keyPath: 'isDone', options: { unique: false } },
      ],
    },
  ],
})
