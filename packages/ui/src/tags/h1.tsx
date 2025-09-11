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
        'font-extrabold text-4xl text-center text-balance tracking-tight scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h1>
  )
}
