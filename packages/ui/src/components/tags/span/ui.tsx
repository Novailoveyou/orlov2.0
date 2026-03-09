import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SPAN_TAG } from './constants'
import { spanVariants } from './utils'
import { SpanProps } from './model'

/**
 * @description <Span> component to display <span> tag
 * @remarks
 * The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 */
export function Span({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SpanProps): JSX.Element {
  const Comp = asChild ? Slot : SPAN_TAG

  return (
    <Comp
      data-slot={SPAN_TAG}
      ref={ref}
      className={cn(spanVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
