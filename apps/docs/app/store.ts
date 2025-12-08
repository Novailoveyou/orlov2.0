'use client'
import 'client-only'

import type { ExampleStore } from '@/entities/example/model'
import { createStore } from '@repo/store'
import { Example2Store } from '@/entities/example2/model'

export type Store = ExampleStore & Example2Store

export const { createSlice, StoreProvider, useStore } = createStore<Store>()
