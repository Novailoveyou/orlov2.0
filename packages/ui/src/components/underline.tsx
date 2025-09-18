import { ComponentProps } from 'react'
import { Span } from './tags/span'
import { cn } from '../utils'

type UnderlineProps = Pick<
  ComponentProps<typeof Span>,
  'className' | 'children'
>

/**
 * @description Underline component to underline text
 */
export function Underline({ className, children }: UnderlineProps) {
  return <Span className={cn('ui:underline', className)}>{children}</Span>
}
