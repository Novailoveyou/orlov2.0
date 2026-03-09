import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'optgroup'

export const optgroupVariants = cva('', {
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

type OptgroupProps = AsChildProp &
  VariantProps<typeof optgroupVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Optgroup> component to display <optgroup> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 * @remarks
 * The <optgroup> HTML element creates a grouping of options within a <select> element.
 * In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.
 */
export function Optgroup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OptgroupProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(optgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
