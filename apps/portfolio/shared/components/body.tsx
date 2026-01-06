import 'server-only'

import { Body as BodyBase } from '@repo/ui/components/tags/body'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Body({ className, ...props }: ComponentProps<typeof BodyBase>) {
  return (
    <BodyBase
      // overscroll-contain
      className={cn('font-poppins', className)}
      {...props}
    />
  )
}
