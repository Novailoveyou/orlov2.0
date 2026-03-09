import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TR_TAG } from './constants'
import { trVariants } from './utils'
import { TrProps } from './model'

/**
 * @description <Tr> component to display <tr> tag
 * @remarks
 * The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
export function Tr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TrProps): JSX.Element {
  const Comp = asChild ? Slot : TR_TAG

  return (
    <Comp
      data-slot={TR_TAG}
      ref={ref}
      className={cn(trVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
