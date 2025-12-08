'use client'
import 'client-only'

import type { StateCreator } from 'zustand/vanilla'
import { createStore as createZustandVanillaStore } from 'zustand/vanilla'
import {
  devtools,
  // persist
} from 'zustand/middleware'
import { useStore as useZustandStore } from 'zustand'
// import type { StoreApi, UseBoundStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { ComponentProps, JSX } from 'react'
import { createContext, useContext, useRef } from 'react'

export const createStore = <Store extends Record<string, unknown>>() => {
  type ZustandMiddleware = [
    ['zustand/devtools', never],
    ['zustand/immer', never],
  ]

  type Slice<T> = StateCreator<Store, ZustandMiddleware, [], T>

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
  */
  const createSlice = <_Slice extends Partial<Store>>(slice: Slice<_Slice>) =>
    slice

  // type WithSelectors<S> = S extends { getState: () => infer T }
  //   ? S & { use: { [K in keyof T]: () => T[K] } }
  //   : never

  // export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  //   _store: S,
  // ) => {
  //   const store = _store as WithSelectors<typeof _store>
  //   store.use = {}
  //   for (const k of Object.keys(store.getState())) {
  //     ;(store.use as any)[k] = () => store(s => s[k as keyof typeof s])
  //   }

  //   return store
  // }

  // export const createVersion = (
  //   version: (string & {}) | `${number}.${number}.${number}`,
  // ) =>
  //   version
  //     .split('.')
  //     .reduce((acc, cur, idx) => acc + Number(cur) * Math.pow(100, 2 - idx), 0)

  const createBaseStore = <Slices extends ReturnType<typeof createSlice>[]>(
    slices: Slices,
  ) => {
    return createZustandVanillaStore<Store>()(
      devtools(
        // persist(
        immer((...props) =>
          slices.reduce(
            (acc, slice) => ({ ...acc, ...slice(...props) }),
            {} as Store,
          ),
        ),
        // {
        //   name: 'web-store',
        //   storage: undefined,
        //   // storage:
        //   //   (typeof window !== 'undefined' &&
        //   //     createJSONStorage(() => localStorage)) ||
        //   //   undefined,
        //   version: createVersion(packageJson.version),
        // },
        // ),
      ),
    )
  }

  type StoreApi = ReturnType<typeof createBaseStore>

  type StoreProviderProps = Pick<
    Required<ComponentProps<keyof JSX.IntrinsicElements>>,
    'children'
  > & {
    slices: ReturnType<typeof createSlice>[]
  }

  const StoreContext = createContext<StoreApi | undefined>(undefined)

  const StoreProvider = ({ children, slices }: StoreProviderProps) => {
    const storeRef = useRef<StoreApi | null>(null)
    if (storeRef.current === null) {
      storeRef.current = createBaseStore(slices)
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    )
  }

  const useStore = (() => {
    let storeRef: StoreApi | undefined

    const useStoreHook = <T,>(selector: (store: Store) => T) => {
      const storeContext = useContext(StoreContext)

      if (!storeContext) {
        throw new Error(`useStore must be used within StoreProvider`)
      }

      if (!storeRef) {
        storeRef = storeContext
      }

      return useZustandStore(storeContext, selector)
    }

    useStoreHook.getState = () => {
      if (!storeRef) {
        throw new Error(
          `useStore.getState can only be called after useStore has been used in a component`,
        )
      }
      return storeRef.getState()
    }

    useStoreHook.setState = (partial: Partial<Store>) => {
      if (!storeRef) {
        throw new Error(
          `useStore.setState can only be called after useStore has been used in a component`,
        )
      }
      /** @ts-expect-error todo fix this */
      storeRef.setState(partial)
    }

    useStoreHook.subscribe = (
      listener: (state: Store, prevState: Store) => void,
    ) => {
      if (!storeRef) {
        throw new Error(
          `useStore.subscribe can only be called after useStore has been used in a component`,
        )
      }
      return storeRef.subscribe(listener)
    }

    // useStoreHook.use = {} as {
    //   [K in keyof Store]: () => Store[K]
    // }

    // for (const k of objectKeys(useStoreHook.getState())) {
    //   ;(useStoreHook.use as any)[k] = () =>
    //     useStoreHook(s => s[k as keyof typeof s])
    // }

    return useStoreHook
  })()

  return { createSlice, StoreProvider, useStore }
}
