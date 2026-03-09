import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'sup'

export const supVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:text-xs ui:align-super',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SupProps = AsChildProp &
  VariantProps<typeof supVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Sup> component to display <sup> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
 * @remarks
 * The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 */
export function Sup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SupProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(supVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
