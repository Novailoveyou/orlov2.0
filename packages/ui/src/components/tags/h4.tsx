import { cn } from '../../utils'
import { ComponentProps } from 'react'

type H4Props = ComponentProps<'h4'>

/**
 * @description H4 component to display fourth-level headings
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
 */
export function H4({ children, className, ...props }: H4Props) {
  return (
    <h4
      className={cn(
        'ui:font-semibold ui:text-xl ui:tracking-tight ui:scroll-m-20',
        className,
      )}
      {...props}>
      {children}
    </h4>
  )
}
