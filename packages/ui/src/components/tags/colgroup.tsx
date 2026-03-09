import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'colgroup'

export const colgroupVariants = cva('', {
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

type ColgroupProps = AsChildProp &
  VariantProps<typeof colgroupVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Colgroup> component to display <colgroup> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 * @remarks
 * The <colgroup> HTML element defines a group of columns within a table.
 */
export function Colgroup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ColgroupProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(colgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
