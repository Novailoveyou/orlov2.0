import {
  createStore as createZustandVanillaStore,
  // StateCreator,
} from 'zustand/vanilla'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { Store } from './model'
import { exampleSlice } from './example'

export const createStore = <
  TSlices extends (typeof exampleSlice)[],
  TOptions extends Parameters<typeof persist<Store>>['1'],
>(
  slices: TSlices,
  options: TOptions,
) => {
  return createZustandVanillaStore<Store>()(
    devtools(
      persist(
        // @ts-expect-error I know what I'm doing
        immer((...props) => ({
          ...slices.map(slice => slice(...props)),
        })),
        options,
      ),
    ),
  )
}

// {
//     name = 'orlov2.0-storage',
//     storage = (process.env.NODE_ENV !== 'development' &&
//       typeof window !== 'undefined' &&
//       createJSONStorage(() => localStorage)) ||
//       undefined,
//     version = Number(packageJson.version),
//     ...restOptions
//   }

// (...props) => ({
//           ...exampleSlice(...props),
//         })

// partialize: (state) =>
//   Object.fromEntries(
//     Object.entries(state).filter(
//       ([key]) =>
//         !(['QNAs'] as (keyof Store)[]).includes(key as keyof Store),
//     ),
//   ),
