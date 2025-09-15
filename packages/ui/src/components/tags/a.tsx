import { ComponentProps } from 'react'
import { cn } from '../../utils'

type AProps = ComponentProps<'a'>

/**
 * @description A component to display a hyperlink
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
export function A({ className, children, ...props }: AProps) {
  return (
    <a
      className={cn(
        'ui:text-inherit ui:no-underline ui:cursor-pointer',
        className,
      )}
      {...props}>
      {children}
    </a>
  )
}
