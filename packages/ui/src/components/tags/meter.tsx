import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'meter'

export const meterVariants = cva('', {
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

type MeterProps = AsChildProp &
  VariantProps<typeof meterVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Meter> component to display <meter> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 * @remarks
 * The <meter> HTML element represents either a scalar value within a known range or a fractional value.
 */
export function Meter({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MeterProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(meterVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
