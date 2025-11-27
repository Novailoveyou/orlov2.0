import { Slice, Store } from './model'

/**
 * @description Used to create a slice for the store. Currently only used to type `slice` argument
 *
 * @example
 *
 * ```ts
 * // features/QNAs/store.ts
 * export const QNAsSlice = createSlice<QNAsStore>((set) => ({
      QNAs: {
        currentQNAId: QNAS[0].id,
        updateCurrentQNAById: (currentQNAId) =>
          set((state) => {
            state.QNAs.currentQNAId = currentQNAId
          }),
      },
    }))
 * ```
 *
 */
export const createSlice = <_Slice extends Partial<Store>>(
  slice: Slice<_Slice>,
) => slice

import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>
  store.use = {}
  for (const k of Object.keys(store.getState())) {
    ;(store.use as any)[k] = () => store(s => s[k as keyof typeof s])
  }

  return store
}
