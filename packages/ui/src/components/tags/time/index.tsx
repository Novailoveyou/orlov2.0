import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TIME_TAG } from './constants'
import { timeVariants } from './utils'
import { TimeProps } from './model'

/**
 * @description <Time> component to display <time> tag
 * @remarks
 * dateTime format: YYYY-MM-DDThh:mm:ssTZD
 *
 * The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 * It may represent one of the following:
 * A time on a 24-hour clock.
 * A precise date in the Gregorian calendar (with optional time and timezone information).
 * A valid time duration.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 * @todo add support for `dateTime` as `Date` object
 */
export function Time({
  asChild,
  variant,
  ref,
  className,
  children,
  dateTime,
  ...props
}: TimeProps): JSX.Element {
  const Comp = asChild ? Slot : TIME_TAG

  return (
    <Comp
      data-slot={TIME_TAG}
      ref={ref}
      dateTime={dateTime}
      className={cn(timeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
