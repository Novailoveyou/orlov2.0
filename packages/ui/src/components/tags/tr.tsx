import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'tr'

export const trVariants = cva('', {
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

type TrProps = AsChildProp &
  VariantProps<typeof trVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Tr> component to display <tr> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 * @remarks
 * The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.
 */
export function Tr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TrProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(trVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
