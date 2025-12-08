import { initStore } from '@repo/store'
import { Store } from './model'

export const { createSlice, createStore } = initStore<Store>()
