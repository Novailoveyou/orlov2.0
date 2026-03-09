import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { LABEL_TAG } from './constants'
import { labelVariants } from './utils'
import { LabelProps } from './model'

/**
 * @description <Label> component to display <label> tag
 * @remarks
 * The <label> HTML element represents a caption for an item in a user interface.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 */
export function Label({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LabelProps): JSX.Element {
  const Comp = asChild ? Slot : LABEL_TAG

  return (
    <Comp
      data-slot={LABEL_TAG}
      ref={ref}
      className={cn(labelVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
