import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TEXTAREA_TAG } from './constants'
import { textareaVariants } from './utils'
import { TextareaProps } from './model'

/**
 * @description <Textarea> component to display <textarea> tag
 * @remarks
 * The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
export function Textarea({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TextareaProps): JSX.Element {
  const Comp = asChild ? Slot : TEXTAREA_TAG

  return (
    <Comp
      data-slot={TEXTAREA_TAG}
      ref={ref}
      className={cn(textareaVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
