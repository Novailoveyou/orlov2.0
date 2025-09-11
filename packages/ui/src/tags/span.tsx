import { ComponentProps } from 'react'
import { cn } from '../utils'

type SpanProps = ComponentProps<'span'>

/**
 * @description Span component to display a spanision or a section
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 */
export function Span({ children, className, ...props }: SpanProps) {
  return (
    <span className={cn(className)} {...props}>
      {children}
    </span>
  )
}
