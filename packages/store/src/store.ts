import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import packageJson from '../package.json'
import { Store } from './model'
import { exampleSlice } from './example'
import { createVersion } from './utils'

export const createStore = () => {
  return createZustandVanillaStore<Store>()(
    devtools(
      persist(
        immer((...props) => ({
          ...exampleSlice(...props),
        })),
        {
          name: 'web-store',
          storage: undefined,
          // storage:
          //   (typeof window !== 'undefined' &&
          //     createJSONStorage(() => localStorage)) ||
          //   undefined,
          version: createVersion(packageJson.version),
        },
      ),
    ),
  )
}
