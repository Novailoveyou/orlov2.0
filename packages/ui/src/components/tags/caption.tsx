import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'caption'

export const captionVariants = cva('', {
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

type CaptionProps = AsChildProp &
  VariantProps<typeof captionVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Caption> component to display <caption> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 * @remarks
 * The <caption> HTML element specifies the caption (or title) of a table, providing the table an accessible name or accessible description.
 */
export function Caption({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CaptionProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(captionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
