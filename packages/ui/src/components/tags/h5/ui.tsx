import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { H5_TAG } from './constants'
import { h5Variants } from './utils'
import { H5Props } from './model'

/**
 * @description <H5> component to display <h5> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H5({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H5Props): JSX.Element {
  const Comp = asChild ? Slot : H5_TAG

  return (
    <Comp
      data-slot={H5_TAG}
      ref={ref}
      className={cn(h5Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
