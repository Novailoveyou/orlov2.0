import { cn } from '../utils'
import { ComponentProps } from 'react'

type H1Props = ComponentProps<'h1'>

/**
 * @description H1 component to display top-level headings
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
 */
export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        'ui:font-extrabold ui:text-4xl ui:text-center ui:text-balance ui:tracking-tight ui:scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h1>
  )
}
