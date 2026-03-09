import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { B_TAG } from './constants'
import { bVariants } from './utils'
import { BProps } from './model'

/**
 * @description <B> component to display <b> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 * @remarks
 * The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the <strong> element.
 */
export function B({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BProps): JSX.Element {
  const Comp = asChild ? Slot : B_TAG

  return (
    <Comp
      data-slot={B_TAG}
      ref={ref}
      className={cn(bVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
