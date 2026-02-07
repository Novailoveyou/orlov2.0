import type { ComponentProps } from 'react'
import { cn } from '../lib/utils'

export const Section = ({
  className,
  children,
}: Pick<ComponentProps<'section'>, 'className' | 'children'>) => {
  return (
    <section className={cn('px-4 w-full max-w-full', className)}>
      {children}
    </section>
  )
}
