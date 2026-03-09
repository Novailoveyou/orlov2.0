import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H3_TAG } from './constants'
import { h3Variants } from './utils'
import { H3Props } from './model'

/**
 * @description <H3> component to display <h3> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H3({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H3Props): JSX.Element {
  const Comp = asChild ? Slot : H3_TAG

  return (
    <Comp
      data-slot={H3_TAG}
      ref={ref}
      className={cn(h3Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
