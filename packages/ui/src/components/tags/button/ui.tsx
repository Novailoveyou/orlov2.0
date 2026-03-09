import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BUTTON_TAG } from './constants'
import { buttonVariants } from './utils'
import { ButtonProps } from './model'

/**
 * @description <Button> component to display <button> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * @remarks
 * The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.
 * By default, HTML buttons are presented in a style resembling the platform the user agent runs on, but you can change buttons' appearance with CSS.
 */
export function Button({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const Comp = asChild ? Slot : BUTTON_TAG

  return (
    <Comp
      data-slot={BUTTON_TAG}
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
