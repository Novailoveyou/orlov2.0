import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'address'

export const addressVariants = cva('', {
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

type AddressProps = AsChildProp &
  VariantProps<typeof addressVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Address> component to display <address> tag
 * @remarks
 * The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address
 * @example
 * ```tsx
 * const CompanyAddress = () => {
 *   return (
 *     <Address>
 *       <A href="mailto:contact@example.com">contact@example.com</A>
 *       <A href="tel:+19999999999">+1 (999) 999‑9999</A>
 *     </Address>
 *   )
 * }
 * ```
 */
export function Address({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AddressProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(addressVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
