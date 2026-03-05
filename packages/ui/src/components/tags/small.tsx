import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'small'

export const smallVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'font-medium text-sm leading-none',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SmallProps = AsChildProp &
  VariantProps<typeof smallVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Small> component to display <small> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 * @todo fill in tsdoc
 */
export function Small({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SmallProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(smallVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
