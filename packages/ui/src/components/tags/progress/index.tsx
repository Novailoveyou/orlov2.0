import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { PROGRESS_TAG } from './constants'
import { progressVariants } from './utils'
import { ProgressProps } from './model'

/**
 * @description <Progress> component to display <progress> tag
 * @remarks
 * The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 */
export function Progress({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ProgressProps): JSX.Element {
  const Comp = asChild ? Slot : PROGRESS_TAG

  return (
    <Comp
      data-slot={PROGRESS_TAG}
      ref={ref}
      className={cn(progressVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
