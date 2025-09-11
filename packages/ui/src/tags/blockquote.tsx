import { cn } from '../utils'
import { ComponentProps } from 'react'

type BlockquoteProps = ComponentProps<'blockquote'>

/**
 * @description Blockquote component to display a section that is quoted from another source
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 */
export function Blockquote({ children, className, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn('mt-6 pl-6 border-l-2 italic', className)}
      {...props}>
      {children}
    </blockquote>
  )
}
