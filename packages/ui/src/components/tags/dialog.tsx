import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'dialog'

export const dialogVariants = cva('', {
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

type DialogProps = AsChildProp &
  VariantProps<typeof dialogVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Dialog> component to display <dialog> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * @remarks
 * The <dialog> HTML element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
 */
export function Dialog({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DialogProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(dialogVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
