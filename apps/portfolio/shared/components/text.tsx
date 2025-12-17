// TODO: figure out server only

import { cn } from '@/shared/utils'
import { Span } from '@/shared/components/span'
import { ComponentProps } from 'react'

export const Text = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Span>) => {
  return (
    <Span className={cn('font-poppins', className)} {...props}>
      {children}
    </Span>
  )
}
