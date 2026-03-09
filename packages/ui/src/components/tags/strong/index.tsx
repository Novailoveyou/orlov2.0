import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { STRONG_TAG } from './constants'
import { strongVariants } from './utils'
import { StrongProps } from './model'

/**
 * @description <Strong> component to display <strong> tag
 * @remarks
 * The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 */
export function Strong({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: StrongProps): JSX.Element {
  const Comp = asChild ? Slot : STRONG_TAG

  return (
    <Comp
      data-slot={STRONG_TAG}
      ref={ref}
      className={cn(strongVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
