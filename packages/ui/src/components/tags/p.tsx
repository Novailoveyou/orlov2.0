import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'p'

export const pVariants = cva('', {
  variants: {
    variant: {
      default: '',
      lead: 'ui:text-muted-foreground ui:text-xl',
      large: 'ui:text-lg ui:font-semibold',
      muted: 'ui:text-muted-foreground ui:text-sm',
      opinionated: 'ui:text-foreground',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type PProps = AsChildProp &
  VariantProps<typeof pVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <P> component to display <p> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 * @remakrs
 * The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 * Paragraphs are block-level elements, and notably will automatically close if another block-level element is parsed before the closing </p> tag. See "Tag omission" below.
 */
export function P({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: PProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(pVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
