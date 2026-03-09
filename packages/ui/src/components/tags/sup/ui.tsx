import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SUP_TAG } from './constants'
import { supVariants } from './utils'
import { SupProps } from './model'

/**
 * @description <Sup> component to display <sup> tag
 * @remarks
 * The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
 */
export function Sup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SupProps): JSX.Element {
  const Comp = asChild ? Slot : SUP_TAG

  return (
    <Comp
      data-slot={SUP_TAG}
      ref={ref}
      className={cn(supVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
