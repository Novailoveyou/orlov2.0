import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'ul'

export const ulVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:m-0 ui:p-0',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type UlProps = AsChildProp &
  VariantProps<typeof ulVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Ul> component to display <ul> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 * @todo fill in tsdoc
 */
export function Ul({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: UlProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      id={id}
      className={cn(ulVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
