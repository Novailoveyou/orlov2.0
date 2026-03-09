import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'option'

export const optionVariants = cva('', {
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

type OptionProps = AsChildProp &
  VariantProps<typeof optionVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Option> component to display <option> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 * @remarks
 * The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 */
export function Option({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OptionProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(optionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
