import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H4_TAG } from './constants'
import { h4Variants } from './utils'
import { H4Props } from './model'

/**
 * @description <H4> component to display <h4> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H4({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H4Props): JSX.Element {
  const Comp = asChild ? Slot : H4_TAG

  return (
    <Comp
      data-slot={H4_TAG}
      ref={ref}
      className={cn(h4Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
