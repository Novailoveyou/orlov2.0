import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'figcaption'

export const figcaptionVariants = cva('', {
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

type FigcaptionProps = AsChildProp &
  VariantProps<typeof figcaptionVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(figcaptionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
