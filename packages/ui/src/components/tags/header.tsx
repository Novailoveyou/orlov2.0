import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'header'

export const headerVariants = cva('', {
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

type HeaderProps = AsChildProp &
  VariantProps<typeof headerVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Header> component to display <header> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
 * @todo fill in tsdoc
 */
export function Header({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HeaderProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(headerVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
