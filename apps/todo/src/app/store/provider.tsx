import { BaseStoreProvider } from '@/app/store'
import { type ComponentProps } from 'react'
import { todoSlice } from '@/entities/todo/store'

export const StoreProvider = ({
  children,
}: Pick<ComponentProps<typeof BaseStoreProvider>, 'children'>) => (
  <BaseStoreProvider slices={[todoSlice]}>{children}</BaseStoreProvider>
)
