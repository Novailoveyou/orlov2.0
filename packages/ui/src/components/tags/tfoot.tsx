import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'tfoot'

export const tfootVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: '',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type TfootProps = AsChildProp &
  VariantProps<typeof tfootVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Tfoot> component to display <tfoot> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 * @remarks
 * The <tfoot> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column.
 */
export function Tfoot({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TfootProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(tfootVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
