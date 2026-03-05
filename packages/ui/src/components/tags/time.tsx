import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'time'

export const timeVariants = cva('', {
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

type BaseTimeProps = ComponentProps<typeof TAG>

type TimeProps = AsChildProp &
  VariantProps<typeof timeVariants> &
  Omit<BaseTimeProps, 'dateTime'> &
  Required<Pick<BaseTimeProps, 'dateTime'>>

/**
 * @description <Time> component to display <time> tag
 * @remarks dateTime format: YYYY-MM-DDThh:mm:ssTZD
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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      dateTime={dateTime}
      className={cn(timeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
