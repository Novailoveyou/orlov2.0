import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'rp'

export const rpVariants = cva('', {
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

type RpProps = AsChildProp &
  VariantProps<typeof rpVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Rp> component to display <rp> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
 * @remarks
 * The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text.
 */
export function Rp({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RpProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(rpVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
