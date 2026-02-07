import type { ComponentProps } from 'react'
import { cn } from '../lib/utils'

export const Container = ({
  className,
  children,
}: Pick<ComponentProps<'div'>, 'className' | 'children'>) => {
  return (
    <div className={cn('mx-auto w-full max-w-3xl', className)}>{children}</div>
  )
}
