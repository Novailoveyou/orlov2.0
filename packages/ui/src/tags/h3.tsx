import { cn } from '../utils'
import { ComponentProps } from 'react'

type H3Props = ComponentProps<'h3'>

/**
 * @description H3 component to display third-level headings
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
 */
export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      className={cn(
        'ui:font-semibold ui:text-2xl ui:tracking-tight ui:scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h3>
  )
}
