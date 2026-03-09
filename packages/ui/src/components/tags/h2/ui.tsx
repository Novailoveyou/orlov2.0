import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H2_TAG } from './constants'
import { h2Variants } from './utils'
import { H2Props } from './model'

/**
 * @description <H2> component to display <h2> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H2({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H2Props): JSX.Element {
  const Comp = asChild ? Slot : H2_TAG

  return (
    <Comp
      data-slot={H2_TAG}
      ref={ref}
      className={cn(h2Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
