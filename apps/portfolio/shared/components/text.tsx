// TODO: figure out server only

import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Span } from '@/shared/components/span'

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
