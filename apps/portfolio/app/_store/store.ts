import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Store } from './model'
import { leadSlice } from '@/entities/lead/store'

export const createStore = () => {
  return createZustandVanillaStore<Store>()(
    devtools(
      // TODO: make sure immer on the global level here is valid, it might be better to have it on slice level only
      immer((...props) => ({
        ...leadSlice(...props),
      })),
    ),
  )
}
