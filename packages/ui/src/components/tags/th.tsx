import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'th'

export const thVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type ThProps = AsChildProp &
  VariantProps<typeof thVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Th> component to display <th> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 * @remarks
 * The <th> HTML element defines a cell as the header of a group of table cells and may be used as a child of the <tr> element. The exact nature of this group is defined by the scope and headers attributes.
 */
export function Th({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ThProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(thVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
