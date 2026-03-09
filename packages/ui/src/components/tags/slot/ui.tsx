import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SLOT_TAG } from './constants'
import { slotVariants } from './utils'
import { SlotProps } from './model'

/**
 * @description <SlotTag> component to display <slot> tag
 * @remarks
 * The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 */
export function SlotTag({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SlotProps): JSX.Element {
  const Comp = asChild ? Slot : SLOT_TAG

  return (
    <Comp
      data-slot={SLOT_TAG}
      ref={ref}
      className={cn(slotVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
