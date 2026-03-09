import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'br'

export const brVariants = cva('', {
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

type BrProps = AsChildProp &
  VariantProps<typeof brVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Br> component to display <br> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
 * @remarks
 * The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 */
export function Br({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BrProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(brVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
