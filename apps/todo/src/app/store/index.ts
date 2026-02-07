import { createStore } from '@repo/store'
import { type TodoStore } from '@/entities/todo/model'

export type Store = TodoStore

export const {
  createSlice,
  StoreProvider: BaseStoreProvider,
  useStore,
} = createStore<Store>()
