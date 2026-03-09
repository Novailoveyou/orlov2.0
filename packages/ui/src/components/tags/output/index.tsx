import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { OUTPUT_TAG } from './constants'
import { outputVariants } from './utils'
import { OutputProps } from './model'

/**
 * @description <Output> component to display <output> tag
 * @remarks
 * The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 */
export function Output({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OutputProps): JSX.Element {
  const Comp = asChild ? Slot : OUTPUT_TAG

  return (
    <Comp
      data-slot={OUTPUT_TAG}
      ref={ref}
      className={cn(outputVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
