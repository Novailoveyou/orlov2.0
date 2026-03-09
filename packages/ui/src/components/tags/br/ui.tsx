import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BR_TAG } from './constants'
import { brVariants } from './utils'
import { BrProps } from './model'

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
  const Comp = asChild ? Slot : BR_TAG

  return (
    <Comp
      data-slot={BR_TAG}
      ref={ref}
      className={cn(brVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
