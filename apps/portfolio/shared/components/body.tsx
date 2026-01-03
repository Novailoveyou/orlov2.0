import 'server-only'

import { Body as BodyBase } from '@repo/ui/components/tags/body'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Body({ className, ...props }: ComponentProps<typeof BodyBase>) {
  return (
    <BodyBase
      className={cn('overscroll-contain font-poppins', className)}
      {...props}
    />
  )
}
