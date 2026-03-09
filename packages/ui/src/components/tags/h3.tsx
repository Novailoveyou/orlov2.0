import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'h3'

export const h3Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:font-semibold ui:text-2xl ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type H3Props = AsChildProp &
  VariantProps<typeof h3Variants> &
  ComponentProps<typeof TAG>

/**
 * @description <H3> component to display <h3> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H3({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H3Props): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(h3Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
