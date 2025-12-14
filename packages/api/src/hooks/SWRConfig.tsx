import { ComponentProps } from 'react'
import { SWRConfig as SWRConfigBase } from 'swr'

export const SWRConfig = ({
  value,
  ...props
}: ComponentProps<typeof SWRConfigBase>) => (
  <SWRConfigBase
    value={{
      errorRetryCount: 3,
      errorRetryInterval: 3000,
      shouldRetryOnError: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
      revalidateIfStale: true,
      loadingTimeout: 3000,
      dedupingInterval: 2000,
      ...value,
    }}
    {...props}
  />
)
