import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'form'

export const formVariants = cva('', {
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

type FormProps = AsChildProp &
  VariantProps<typeof formVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(formVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
