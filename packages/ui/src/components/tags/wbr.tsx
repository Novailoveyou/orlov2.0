import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'wbr'

export const wbrVariants = cva('', {
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

type WbrProps = AsChildProp &
  VariantProps<typeof wbrVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Wbr> component to display <wbr> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
 * @remarks
 * The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.
 */
export function Wbr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: WbrProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(wbrVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
