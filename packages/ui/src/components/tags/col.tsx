import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'col'

export const colVariants = cva('', {
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

type ColProps = AsChildProp &
  VariantProps<typeof colVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Col> component to display <col> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 * @remarks
 * The <col> HTML element defines one or more columns in a column group represented by its parent <colgroup> element. The <col> element is only valid as a child of a <colgroup> element that has no span attribute defined.
 */
export function Col({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ColProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(colVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
