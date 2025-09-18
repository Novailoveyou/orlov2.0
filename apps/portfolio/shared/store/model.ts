import { ExampleStore } from './example'
import { StateCreator } from 'zustand/vanilla'

export type Store = ExampleStore

type ZustandMiddleware = [['zustand/devtools', never], ['zustand/immer', never]]

export type Slice<T> = StateCreator<Store, ZustandMiddleware, [], T>
