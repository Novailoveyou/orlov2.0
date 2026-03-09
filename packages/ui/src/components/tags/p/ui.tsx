import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { P_TAG } from './constants'
import { pVariants } from './utils'
import { PProps } from './model'

/**
 * @description <P> component to display <p> tag
 * @remakrs
 * The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 * Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing </p> tag. See "Tag omission" below.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 */
export function P({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: PProps): JSX.Element {
  const Comp = asChild ? Slot : P_TAG

  return (
    <Comp
      data-slot={P_TAG}
      ref={ref}
      className={cn(pVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
