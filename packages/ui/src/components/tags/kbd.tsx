import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'kbd'

export const kbdVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:text-sm',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type KbdProps = AsChildProp &
  VariantProps<typeof kbdVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Kbd> component to display <kbd> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 * @remarks
 * The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard.
 */
export function Kbd({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: KbdProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(kbdVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
