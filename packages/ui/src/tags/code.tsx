import { cn } from '../utils'
import { ComponentProps } from 'react'

type CodeProps = ComponentProps<'code'>

/**
 * @description Code component to display inline code snippets
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
 */
export function Code({ children, className, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'relative bg-muted px-[0.3rem] py-[0.2rem] rounded font-mono font-semibold text-sm',
        className,
      )}
      {...props}>
      {children}
    </code>
  )
}
