import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { FIGCAPTION_TAG } from './constants'
import { figcaptionVariants } from './utils'
import { FigcaptionProps } from './model'

/**
 * @description <Figcaption> component to display <figcaption> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
 * @remarks
 * The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element, providing the <figure> an accessible name.
 */
export function Figcaption({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FigcaptionProps): JSX.Element {
  const Comp = asChild ? Slot : FIGCAPTION_TAG

  return (
    <Comp
      data-slot={FIGCAPTION_TAG}
      ref={ref}
      className={cn(figcaptionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
