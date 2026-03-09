import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { OL_TAG } from './constants'
import { olVariants } from './utils'
import { OlProps } from './model'

/**
 * @description <Ol> component to display <ol> tag
 * @remarks
 * The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 */
export function Ol({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: OlProps): JSX.Element {
  const Comp = asChild ? Slot : OL_TAG

  return (
    <Comp
      data-slot={OL_TAG}
      ref={ref}
      id={id}
      className={cn(olVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
