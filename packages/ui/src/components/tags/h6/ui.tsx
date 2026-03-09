import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H6_TAG } from './constants'
import { h6Variants } from './utils'
import { H6Props } from './model'

/**
 * @description <H6> component to display <h6> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H6({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H6Props): JSX.Element {
  const Comp = asChild ? Slot : H6_TAG

  return (
    <Comp
      data-slot={H6_TAG}
      ref={ref}
      className={cn(h6Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
