import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'button'

export const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type ButtonProps = AsChildProp &
  VariantProps<typeof buttonVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
