import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { COL_TAG } from './constants'
import { colVariants } from './utils'
import { ColProps } from './model'

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
  const Comp = asChild ? Slot : COL_TAG

  return (
    <Comp
      data-slot={COL_TAG}
      ref={ref}
      className={cn(colVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
