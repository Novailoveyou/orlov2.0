import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TD_TAG } from './constants'
import { tdVariants } from './utils'
import { TdProps } from './model'

/**
 * @description <Td> component to display <td> tag
 * @remarks
 * The <td> HTML element defines a cell of a table that contains data and may be used as a child of the <tr> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 */
export function Td({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TdProps): JSX.Element {
  const Comp = asChild ? Slot : TD_TAG

  return (
    <Comp
      data-slot={TD_TAG}
      ref={ref}
      className={cn(tdVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
