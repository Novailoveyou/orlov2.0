import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'legend'

export const legendVariants = cva('', {
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

type LegendProps = AsChildProp &
  VariantProps<typeof legendVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Legend> component to display <legend> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
 * @remarks
 * The <legend> HTML element represents a caption for the content of its parent <fieldset>.
 * In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.
 */
export function Legend({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LegendProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(legendVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
