import { cn } from '../utils'
import { ComponentProps } from 'react'

type H2Props = ComponentProps<'h2'>

/**
 * @description H2 component to display second-level headings
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
 */
export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        'first:mt-0 pb-2 border-b font-semibold text-3xl tracking-tight scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h2>
  )
}
