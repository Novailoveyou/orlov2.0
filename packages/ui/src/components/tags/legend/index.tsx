import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { LEGEND_TAG } from './constants'
import { legendVariants } from './utils'
import { LegendProps } from './model'

/**
 * @description <Legend> component to display <legend> tag
 * @remarks
 * The <legend> HTML element represents a caption for the content of its parent <fieldset>.
 * In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
 */
export function Legend({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LegendProps): JSX.Element {
  const Comp = asChild ? Slot : LEGEND_TAG

  return (
    <Comp
      data-slot={LEGEND_TAG}
      ref={ref}
      className={cn(legendVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
