'use client'
import 'client-only'

import { createStore } from '@repo/store'
// import { LeadStore } from '@/entities/lead/model'

export type Store = Record<string, unknown>

export const { createSlice, StoreProvider, useStore } = createStore<Store>()
