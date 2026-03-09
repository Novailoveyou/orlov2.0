import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DATALIST_TAG } from './constants'
import { datalistVariants } from './utils'
import { DatalistProps } from './model'

/**
 * @description <Datalist> component to display <datalist>
 * @remarks
 * The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 * @example
 * ```tsx
 * const ColorPicker = () => <Datalist id='colors'><option value='red' /><option value='blue' /></Datalist>
 * ```
 */
export function Datalist({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DatalistProps): JSX.Element {
  const Comp = asChild ? Slot : DATALIST_TAG

  return (
    <Comp
      data-slot={DATALIST_TAG}
      ref={ref}
      className={cn(datalistVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
