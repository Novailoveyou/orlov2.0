import * as React from 'react'

import { cn } from '../../utils/index'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'ui:flex ui:flex-col ui:gap-6 ui:bg-card ui:shadow-sm ui:py-6 ui:border ui:rounded-xl ui:text-card-foreground',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        'ui:@container/card-header ui:items-start ui:gap-1.5 ui:grid ui:has-data-[slot=card-action]:grid-cols-[1fr_auto] ui:grid-rows-[auto_auto] ui:auto-rows-min ui:px-6 ui:[.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-title'
      className={cn('ui:font-semibold ui:leading-none', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={cn('ui:text-muted-foreground ui:text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn(
        'ui:justify-self-end ui:self-start ui:col-start-2 ui:row-span-2 ui:row-start-1',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-content'
      className={cn('ui:px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-footer'
      className={cn(
        'ui:flex ui:items-center ui:px-6 ui:[.border-t]:pt-6',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
