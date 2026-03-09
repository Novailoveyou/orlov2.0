import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SELECT_TAG } from './constants'
import { selectVariants } from './utils'
import { SelectProps } from './model'

/**
 * @description <Select> component to display <select> tag
 * @remarks
 * The <select> HTML element represents a control that provides a menu of options.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
export function Select({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SelectProps): JSX.Element {
  const Comp = asChild ? Slot : SELECT_TAG

  return (
    <Comp
      data-slot={SELECT_TAG}
      ref={ref}
      className={cn(selectVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
