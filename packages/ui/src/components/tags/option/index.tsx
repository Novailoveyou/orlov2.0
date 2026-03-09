import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { OPTION_TAG } from './constants'
import { optionVariants } from './utils'
import { OptionProps } from './model'

/**
 * @description <Option> component to display <option> tag
 * @remarks
 * The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 */
export function Option({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OptionProps): JSX.Element {
  const Comp = asChild ? Slot : OPTION_TAG

  return (
    <Comp
      data-slot={OPTION_TAG}
      ref={ref}
      className={cn(optionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
