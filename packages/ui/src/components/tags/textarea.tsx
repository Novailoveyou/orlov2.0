import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'textarea'

export const textareaVariants = cva('', {
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

type TextareaProps = AsChildProp &
  VariantProps<typeof textareaVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Textarea> component to display <textarea> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 * @remarks
 * The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 */
export function Textarea({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TextareaProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(textareaVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
