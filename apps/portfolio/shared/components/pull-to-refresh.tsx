'use client'
import 'client-only'

import { PullToRefresh as PullToRefreshBase } from '@repo/ui/components/pull-to-refresh'
import { ComponentProps } from 'react'
import { cn } from '../utils'

export const PullToRefresh = ({
  className,
  children,
}: Pick<
  ComponentProps<typeof PullToRefreshBase>,
  'children' | 'className'
>) => {
  // TODO: implement onRefresh logic
  const onRefresh = async () => {
    // Simulate a refresh action
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }
  return (
    <PullToRefreshBase
      className={cn('min-h-dvh', className)}
      onRefresh={onRefresh}>
      {children}
    </PullToRefreshBase>
  )
}
