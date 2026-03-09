import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { FORM_TAG } from './constants'
import { formVariants } from './utils'
import { FormProps } from './model'

/**
 * @description <Form> component to display <form> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @remarks
 * The <form> HTML element represents a document section containing interactive controls for submitting information.
 */
export function Form({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FormProps): JSX.Element {
  const Comp = asChild ? Slot : FORM_TAG

  return (
    <Comp
      data-slot={FORM_TAG}
      ref={ref}
      className={cn(formVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
