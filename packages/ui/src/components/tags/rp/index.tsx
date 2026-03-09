import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { RP_TAG } from './constants'
import { rpVariants } from './utils'
import { RpProps } from './model'

/**
 * @description <Rp> component to display <rp> tag
 * @remarks
 * The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
 */
export function Rp({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RpProps): JSX.Element {
  const Comp = asChild ? Slot : RP_TAG

  return (
    <Comp
      data-slot={RP_TAG}
      ref={ref}
      className={cn(rpVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
