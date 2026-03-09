import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SAMP_TAG } from './constants'
import { sampVariants } from './utils'
import { SampProps } from './model'

/**
 * @description <Samp> component to display <samp> tag
 * @remarks
 * The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
 */
export function Samp({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SampProps): JSX.Element {
  const Comp = asChild ? Slot : SAMP_TAG

  return (
    <Comp
      data-slot={SAMP_TAG}
      ref={ref}
      className={cn(sampVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
