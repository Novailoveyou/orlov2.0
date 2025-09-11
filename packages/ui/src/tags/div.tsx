import { ComponentProps } from 'react'
import { cn } from '../utils'

type DivProps = ComponentProps<'div'>

/**
 * @description Div component to display a division or a section
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
 */
export function Div({ children, className, ...props }: DivProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}
