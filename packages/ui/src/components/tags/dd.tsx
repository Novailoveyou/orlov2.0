import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'dd'

export const ddVariants = cva('', {
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

type DdProps = AsChildProp &
  VariantProps<typeof ddVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Dd> component to display <dd> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 * @remarks
 * The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).
 */
export function Dd({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DdProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(ddVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
