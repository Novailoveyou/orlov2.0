import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'output'

export const outputVariants = cva('', {
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

type OutputProps = AsChildProp &
  VariantProps<typeof outputVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Output> component to display <output> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 * @remarks
 * The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 */
export function Output({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: OutputProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(outputVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
