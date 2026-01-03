'use client'
import 'client-only'
import { ComponentProps } from 'react'
import PullToRefreshBase from 'react-simple-pull-to-refresh'

/**
 * @description PullToRefresh component to enable pull-to-refresh functionality in a React application
 * @see https://www.npmjs.com/package/react-simple-pull-to-refresh
 */
export const PullToRefresh = ({
  isPullable = true,
  onRefresh,
  pullDownThreshold = 67,
  maxPullDownDistance = 95,
  resistance = 1,
  refreshingContent,
  pullingContent = '',
  canFetchMore = false,
  onFetchMore,
  fetchMoreThreshold = 100,
  backgroundColor,
  className,
  children,
}: ComponentProps<typeof PullToRefreshBase>) => {
  return (
    <PullToRefreshBase
      isPullable={isPullable}
      onRefresh={onRefresh}
      pullDownThreshold={pullDownThreshold}
      maxPullDownDistance={maxPullDownDistance}
      resistance={resistance}
      refreshingContent={refreshingContent}
      pullingContent={pullingContent}
      canFetchMore={canFetchMore}
      onFetchMore={onFetchMore}
      fetchMoreThreshold={fetchMoreThreshold}
      backgroundColor={backgroundColor}
      className={className}>
      {children}
    </PullToRefreshBase>
  )
}
