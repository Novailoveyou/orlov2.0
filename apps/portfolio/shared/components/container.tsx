import 'server-only'

import { Container as ContainerBase } from '@repo/ui/components/container'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Container({
  className,
  ...props
}: ComponentProps<typeof ContainerBase>) {
  return (
    <ContainerBase
      // max-w-[63.75rem]
      className={cn('flex flex-col px-5 max-w-[64rem] min-h-dvh', className)}
      {...props}
    />
  )
}
