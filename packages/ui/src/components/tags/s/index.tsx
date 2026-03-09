import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { S_TAG } from './constants'
import { sVariants } from './utils'
import { SProps } from './model'

/**
 * @description <S> component to display <s> tag
 * @remarks
 * The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 */
export function S({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SProps): JSX.Element {
  const Comp = asChild ? Slot : S_TAG

  return (
    <Comp
      data-slot={S_TAG}
      ref={ref}
      className={cn(sVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
