import 'server-only'

import { StoreProvider as BaseStoreProvider } from '@/app/_/store'
import { ComponentProps } from 'react'
// import { leadSlice } from '@/entities/lead/store'

export const StoreProvider = ({
  children,
}: Pick<ComponentProps<typeof BaseStoreProvider>, 'children'>) => (
  <BaseStoreProvider slices={[]}>{children}</BaseStoreProvider>
)
