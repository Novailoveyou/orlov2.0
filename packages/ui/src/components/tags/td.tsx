import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'td'

export const tdVariants = cva('', {
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

type TdProps = AsChildProp &
  VariantProps<typeof tdVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Td> component to display <td> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 * @remarks
 * The <td> HTML element defines a cell of a table that contains data and may be used as a child of the <tr> element.
 */
export function Td({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TdProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(tdVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
