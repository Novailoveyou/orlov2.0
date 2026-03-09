import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H1_TAG } from './constants'
import { h1Variants } from './utils'
import { H1Props } from './model'

/**
 * @description <H1> component to display <h1> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H1({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H1Props): JSX.Element {
  const Comp = asChild ? Slot : H1_TAG

  return (
    <Comp
      data-slot={H1_TAG}
      ref={ref}
      className={cn(h1Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
