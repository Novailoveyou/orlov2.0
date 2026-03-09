import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SUB_TAG } from './constants'
import { subVariants } from './utils'
import { SubProps } from './model'

/**
 * @description <Sub> component to display <sub> tag
 * @remarks
 * The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
 */
export function Sub({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SubProps): JSX.Element {
  const Comp = asChild ? Slot : SUB_TAG

  return (
    <Comp
      data-slot={SUB_TAG}
      ref={ref}
      className={cn(subVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
