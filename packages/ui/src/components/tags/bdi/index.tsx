import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BDI_TAG } from './constants'
import { bdiVariants } from './utils'
import { BdiProps } from './model'

/**
 * @description <Bdi> component to display <bdi> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 * @remarks
 * The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 */
export function Bdi({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BdiProps): JSX.Element {
  const Comp = asChild ? Slot : BDI_TAG

  return (
    <Comp
      data-slot={BDI_TAG}
      ref={ref}
      className={cn(bdiVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
