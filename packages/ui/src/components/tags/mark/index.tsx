import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { MARK_TAG } from './constants'
import { markVariants } from './utils'
import { MarkProps } from './model'

/**
 * @description <Mark> component to display <mark> tag
 * @remarks
 * The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 */
export function Mark({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MarkProps): JSX.Element {
  const Comp = asChild ? Slot : MARK_TAG

  return (
    <Comp
      data-slot={MARK_TAG}
      ref={ref}
      className={cn(markVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
