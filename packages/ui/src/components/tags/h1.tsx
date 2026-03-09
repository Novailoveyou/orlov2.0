import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'h1'

export const h1Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:font-extrabold ui:text-4xl ui:text-balance ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type H1Props = AsChildProp &
  VariantProps<typeof h1Variants> &
  ComponentProps<typeof TAG>

/**
 * @description <H1> component to display <h1> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
 * @remarks
 * The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. By default, all heading elements create a block-level box in the layout, starting on a new line and taking up the full width available in their containing block.
 */
export function H1({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H1Props): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(h1Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
