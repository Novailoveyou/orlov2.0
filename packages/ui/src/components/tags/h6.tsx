import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'h6'

export const h6Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold ui:text-lg ui:tracking-tight',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type H6Props = AsChildProp &
  VariantProps<typeof h6Variants> &
  ComponentProps<typeof TAG>

/**
 * @description <H6> component to display <h6> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H6({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H6Props): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(h6Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
