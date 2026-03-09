import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { OPTGROUP_TAG } from './constants'
import { optgroupVariants } from './utils'
import { OptgroupProps } from './model'

/**
 * @description <Optgroup> component to display <optgroup> tag
 * @remarks
 * The <optgroup> HTML element creates a grouping of options within a <select> element.
 * In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 */
export function Optgroup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OptgroupProps): JSX.Element {
  const Comp = asChild ? Slot : OPTGROUP_TAG

  return (
    <Comp
      data-slot={OPTGROUP_TAG}
      ref={ref}
      className={cn(optgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
