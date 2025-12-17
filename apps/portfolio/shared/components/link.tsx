// TODO: figure out server only

import { Link as LinkBase } from '@repo/ui/components/link'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Link({ className, ...props }: ComponentProps<typeof LinkBase>) {
  return <LinkBase className={cn(className)} {...props} />
}
