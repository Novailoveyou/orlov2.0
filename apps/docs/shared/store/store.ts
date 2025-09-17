import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import packageJson from '@/package.json'
import { Store } from './model'
import { exampleSlice } from './example'

export const createStore = () => {
  return createZustandVanillaStore<Store>()(
    devtools(
      persist(
        immer((...props) => ({
          ...exampleSlice(...props),
        })),
        {
          name: 'docs-store',
          storage:
            process.env.NODE_ENV === 'development' ||
            typeof window === 'undefined'
              ? undefined
              : // : createJSONStorage(() => sessionStorage),
                createJSONStorage(() => sessionStorage),
          // partialize: (state) =>
          //   Object.fromEntries(
          //     Object.entries(state).filter(
          //       ([key]) =>
          //         !(['QNAs'] as (keyof Store)[]).includes(key as keyof Store),
          //     ),
          //   ),
          version: Number(packageJson.version),
        },
      ),
    ),
  )
}
