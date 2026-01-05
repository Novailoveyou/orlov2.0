'use client'
import 'client-only'

import { PullToRefresh as PullToRefreshBase } from '@repo/ui/components/pull-to-refresh'
import { ComponentProps } from 'react'
import { cn } from '../utils'
// import { useRouter } from '@/app/_/i18n/navigation'

export const PullToRefresh = ({
  className,
  children,
}: Pick<
  ComponentProps<typeof PullToRefreshBase>,
  'children' | 'className'
>) => {
  // const router = useRouter()
  // TODO: implement onRefresh logic
  const onRefresh = async () => {
    // Simulate a refresh action
    return new Promise<void>(resolve => {
      setTimeout(() => {
        // router.refresh()
        resolve()
      }, 1000)
    })
  }

  // TODO: fix layout shift on load
  return (
    <PullToRefreshBase
      className={cn(
        'flex [&>div+div]:flex flex-col [&>div+div]:flex-col flex-1 [&>div+div]:flex-1 [&>div+div]:justify-between [&>div+div]:gap-6',
        className,
      )}
      onRefresh={onRefresh}>
      {children}
    </PullToRefreshBase>
  )
}
