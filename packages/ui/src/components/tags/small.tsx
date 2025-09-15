import { cn } from '../../utils'
import { ComponentProps } from 'react'

type SmallProps = ComponentProps<'small'>

/**
 * @description Small component to display side comments or small print
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
export function Small({ children, className, ...props }: SmallProps) {
  return (
    <small
      className={cn('font-medium text-sm leading-none', className)}
      {...props}>
      {children}
    </small>
  )
}
