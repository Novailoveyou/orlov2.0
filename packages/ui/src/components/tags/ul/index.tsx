import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { UL_TAG } from './constants'
import { ulVariants } from './utils'
import { UlProps } from './model'

/**
 * @description <Ul> component to display <ul> tag
 * @remarks
 * The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
export function Ul({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: UlProps): JSX.Element {
  const Comp = asChild ? Slot : UL_TAG

  return (
    <Comp
      data-slot={UL_TAG}
      ref={ref}
      id={id}
      className={cn(ulVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
