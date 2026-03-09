import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { INPUT_TAG } from './constants'
import { inputVariants } from './utils'
import { InputProps } from './model'

/**
 * @description <Input> component to display <input> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @remarks
 * The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 */
export function Input({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: InputProps): JSX.Element {
  const Comp = asChild ? Slot : INPUT_TAG

  return (
    <Comp
      data-slot={INPUT_TAG}
      ref={ref}
      className={cn(inputVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
