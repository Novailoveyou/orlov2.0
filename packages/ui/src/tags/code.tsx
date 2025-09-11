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
        'ui:relative ui:bg-muted ui:px-[0.3rem] ui:py-[0.2rem] ui:rounded ui:font-mono ui:font-semibold ui:text-sm',
        className,
      )}
      {...props}>
      {children}
    </code>
  )
}
