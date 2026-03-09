import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { FIGURE_TAG } from './constants'
import { figureVariants } from './utils'
import { FigureProps } from './model'

/**
 * @description <Figure> component to display <figure> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 * @remarks
 * The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit.
 */
export function Figure({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FigureProps): JSX.Element {
  const Comp = asChild ? Slot : FIGURE_TAG

  return (
    <Comp
      data-slot={FIGURE_TAG}
      ref={ref}
      className={cn(figureVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
