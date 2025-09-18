import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Store } from './model'
import { exampleSlice } from './example'

export const createStore = () => {
  return createZustandVanillaStore<Store>()(
    devtools(
      immer((...props) => ({
        ...exampleSlice(...props),
      })),
    ),
  )
}
