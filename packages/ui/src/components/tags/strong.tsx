import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'strong'

export const strongVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-bold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type StrongProps = AsChildProp &
  VariantProps<typeof strongVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Strong> component to display <strong> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 * @remarks
 * The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 */
export function Strong({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: StrongProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(strongVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
