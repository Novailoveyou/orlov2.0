import type { ComponentProps } from 'react'
import { SWRConfig as BaseSWRConfig } from 'swr'
import { toastError } from '@/shared/utils'
import { toast } from 'sonner'

const SLOW_NETOWRK_TOAST_ID = 'ba674718-243c-47e1-b260-664ddf8e2586'

const ERROR_TOAST_ID = '56912961-f8e0-4c90-b332-ceb34ab4d748'

const SWRConfigValue = {
  errorRetryCount: 5,
  errorRetryInterval: 3000,
  loadingTimeout: 3000,
  shouldRetryOnError: true,
  keepPreviousData: true,
  revalidateOnFocus: true,
  revalidateIfStale: true,
  revalidateOnMount: true,
  revalidateOnReconnect: true,
  onError: error => toastError(error, ERROR_TOAST_ID),
  onErrorRetry: error => toastError(error, ERROR_TOAST_ID),
  onLoadingSlow: () => {
    toast('Slow network detected. Please wait...', {
      id: SLOW_NETOWRK_TOAST_ID,
    })
  },
  onSuccess: () => {
    toast.dismiss(SLOW_NETOWRK_TOAST_ID)
    toast.dismiss(ERROR_TOAST_ID)
  },
} as const satisfies ComponentProps<typeof BaseSWRConfig>['value']

export const SWRConfig = ({
  children,
}: Pick<ComponentProps<typeof BaseSWRConfig>, 'children'>) => (
  <BaseSWRConfig value={SWRConfigValue}>{children}</BaseSWRConfig>
)
