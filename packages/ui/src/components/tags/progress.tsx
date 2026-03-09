import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'progress'

export const progressVariants = cva('', {
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

type ProgressProps = AsChildProp &
  VariantProps<typeof progressVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Progress> component to display <progress> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 * @remarks
 * The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
export function Progress({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ProgressProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(progressVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
