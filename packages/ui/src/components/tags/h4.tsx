import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'h4'

export const h4Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:font-semibold ui:text-xl ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type H4Props = AsChildProp &
  VariantProps<typeof h4Variants> &
  ComponentProps<typeof TAG>

/**
 * @description <H4> component to display <h4> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
 * @todo fill in tsdoc
 */
export function H4({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: H4Props): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(h4Variants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
