import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { U_TAG } from './constants'
import { uVariants } from './utils'
import { UProps } from './model'

/**
 * @description <U> component to display <u> tag
 * @remarks
 * The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a single solid underline, but may be altered using CSS.
 * This element used to be called the "Underline" element in older versions of HTML, and is still sometimes misused in this way. To underline text, you should instead apply a style that includes the CSS text-decoration property set to underline.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
 */
export function U({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: UProps): JSX.Element {
  const Comp = asChild ? Slot : U_TAG

  return (
    <Comp
      data-slot={U_TAG}
      ref={ref}
      className={cn(uVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
