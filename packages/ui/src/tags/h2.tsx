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
        'first:ui:mt-0 ui:pb-2 ui:border-b ui:font-semibold ui:text-3xl ui:tracking-tight ui:scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h2>
  )
}
