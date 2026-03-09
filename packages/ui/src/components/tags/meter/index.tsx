import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { METER_TAG } from './constants'
import { meterVariants } from './utils'
import { MeterProps } from './model'

/**
 * @description <Meter> component to display <meter> tag
 * @remarks
 * The <meter> HTML element represents either a scalar value within a known range or a fractional value.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 */
export function Meter({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MeterProps): JSX.Element {
  const Comp = asChild ? Slot : METER_TAG

  return (
    <Comp
      data-slot={METER_TAG}
      ref={ref}
      className={cn(meterVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
