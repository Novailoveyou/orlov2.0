'use client'
import 'client-only'

import { createStore } from './init'
import { exampleSlice } from '@/entities/example/store'

export const { StoreProvider, useStore } = createStore([exampleSlice])
