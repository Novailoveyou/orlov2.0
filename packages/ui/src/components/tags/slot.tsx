import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'slot'

export const slotVariants = cva('', {
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

type SlotProps = AsChildProp &
  VariantProps<typeof slotVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <SlotTag> component to display <slot> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 * @remarks
 * The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 */
export function SlotTag({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SlotProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(slotVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
