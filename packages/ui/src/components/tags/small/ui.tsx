import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SMALL_TAG } from './constants'
import { smallVariants } from './utils'
import { SmallProps } from './model'

/**
 * @description <Small> component to display <small> tag
 * @remarks
 * The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
export function Small({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SmallProps): JSX.Element {
  const Comp = asChild ? Slot : SMALL_TAG

  return (
    <Comp
      data-slot={SMALL_TAG}
      ref={ref}
      className={cn(smallVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
