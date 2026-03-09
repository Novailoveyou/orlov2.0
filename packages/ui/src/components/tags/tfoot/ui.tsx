import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TFOOT_TAG } from './constants'
import { tfootVariants } from './utils'
import { TfootProps } from './model'

/**
 * @description <Tfoot> component to display <tfoot> tag
 * @remarks
 * The <tfoot> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 */
export function Tfoot({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TfootProps): JSX.Element {
  const Comp = asChild ? Slot : TFOOT_TAG

  return (
    <Comp
      data-slot={TFOOT_TAG}
      ref={ref}
      className={cn(tfootVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
