'use client'
import 'client-only'

import {
  createContext,
  useRef,
  useContext,
  ComponentProps,
  JSX,
  useEffect,
} from 'react'
import { useStore as useZustandStore } from 'zustand'
import { createStore } from './store'
import { Store } from './model'

type StoreApi = ReturnType<typeof createStore>

type StoreProviderProps = Pick<
  Required<ComponentProps<keyof JSX.IntrinsicElements>>,
  'children'
> & {
  slices: Parameters<typeof createStore>[0]
  options: Parameters<typeof createStore>[1]
}

const StoreContext = createContext<StoreApi | undefined>(undefined)

export const StoreProvider = ({
  children,
  slices,
  options,
}: StoreProviderProps) => {
  const storeRef = useRef<StoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createStore(slices, options)
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = (() => {
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

  return useStoreHook
})()

export const Effect = <Selected extends ReturnType<typeof useStore>>({
  selector,
  action,
  cleanup,
}: {
  selector: (store: Store) => Selected
  action: (value: Selected) => void
  cleanup?: () => void
}) => {
  const value = useStore(selector)

  useEffect(() => {
    action(value)

    return cleanup?.()
  }, [value, action, cleanup])

  return null
}
