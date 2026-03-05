import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'footer'

export const footerVariants = cva('', {
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

type FooterProps = AsChildProp &
  VariantProps<typeof footerVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Footer> component to display <footer> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 * @todo fill in tsdoc
 */
export function Footer({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FooterProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(footerVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
