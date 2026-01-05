import 'server-only'

import { Ul as UlBase } from '@repo/ui/components/tags/list'
import { ComponentProps } from 'react'
import { cn } from '../utils'

export const Ul = ({ className, ...props }: ComponentProps<typeof UlBase>) => (
  <UlBase className={cn('flex flex-col', className)} {...props} />
)
