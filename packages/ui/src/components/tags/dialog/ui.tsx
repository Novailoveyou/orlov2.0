import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DIALOG_TAG } from './constants'
import { dialogVariants } from './utils'
import { DialogProps } from './model'

/**
 * @description <Dialog> component to display <dialog>
 * @remarks
 * The <dialog> HTML element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
 * The tabindex attribute must not be used on the <dialog> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * @example
 * ```tsx
 * const Modal = () => <Dialog open>Dialog content</Dialog>
 * ```
 */
export function Dialog({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DialogProps): JSX.Element {
  const Comp = asChild ? Slot : DIALOG_TAG

  return (
    <Comp
      data-slot={DIALOG_TAG}
      ref={ref}
      className={cn(dialogVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
