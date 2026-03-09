import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { WBR_TAG } from './constants'
import { wbrVariants } from './utils'
import { WbrProps } from './model'

/**
 * @description <Wbr> component to display <wbr> tag
 * @remarks
 * The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
 */
export function Wbr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: WbrProps): JSX.Element {
  const Comp = asChild ? Slot : WBR_TAG

  return (
    <Comp
      data-slot={WBR_TAG}
      ref={ref}
      className={cn(wbrVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
