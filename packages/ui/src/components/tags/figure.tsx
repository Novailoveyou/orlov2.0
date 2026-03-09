import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'figure'

export const figureVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: '',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type FigureProps = AsChildProp &
  VariantProps<typeof figureVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(figureVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
