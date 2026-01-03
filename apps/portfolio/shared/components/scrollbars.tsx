import { ComponentProps } from 'react'
import { Scrollbars as ScrollbarsBase } from '@repo/ui/components/scrollbars'
import { cn } from '../utils'

export const Scrollbars = ({
  className,
  style,
  ...props
}: ComponentProps<typeof ScrollbarsBase>) => {
  return <ScrollbarsBase className={cn(className)} style={style} {...props} />
}
