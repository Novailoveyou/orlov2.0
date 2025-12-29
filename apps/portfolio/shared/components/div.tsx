import { Div as DivBase } from '@repo/ui/components/tags/div'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Div({ className, ...props }: ComponentProps<typeof DivBase>) {
  return <DivBase className={cn(className)} {...props} />
}
