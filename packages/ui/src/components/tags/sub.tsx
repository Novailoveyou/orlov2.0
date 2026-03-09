import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'sub'

export const subVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:text-xs ui:align-sub',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SubProps = AsChildProp &
  VariantProps<typeof subVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Sub> component to display <sub> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
 * @remarks
 * The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 */
export function Sub({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SubProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(subVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
