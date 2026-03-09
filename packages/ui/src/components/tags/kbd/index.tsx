import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { KBD_TAG } from './constants'
import { kbdVariants } from './utils'
import { KbdProps } from './model'

/**
 * @description <Kbd> component to display <kbd> tag
 * @remarks
 * The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 */
export function Kbd({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: KbdProps): JSX.Element {
  const Comp = asChild ? Slot : KBD_TAG

  return (
    <Comp
      data-slot={KBD_TAG}
      ref={ref}
      className={cn(kbdVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
