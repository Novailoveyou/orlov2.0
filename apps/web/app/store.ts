'use client'
import 'client-only'

import { createStore } from '@repo/store'
import { ExampleStore } from '@/entities/example/model'
import { Example2Store } from '@/entities/example2/model'

export type Store = ExampleStore & Example2Store

export const { createSlice, StoreProvider, useStore } = createStore<Store>()
