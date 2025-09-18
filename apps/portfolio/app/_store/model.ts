import { LeadStore } from '@/entities/lead/model'
import { StateCreator } from 'zustand/vanilla'

export type Store = LeadStore

type ZustandMiddleware = [['zustand/devtools', never], ['zustand/immer', never]]

export type Slice<T> = StateCreator<Store, ZustandMiddleware, [], T>
