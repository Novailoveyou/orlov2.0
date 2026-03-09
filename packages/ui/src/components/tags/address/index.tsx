import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { ADDRESS_TAG } from './constants'
import { addressVariants } from './utils'
import { AddressProps } from './model'

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
  const Comp = asChild ? Slot : ADDRESS_TAG

  return (
    <Comp
      data-slot={ADDRESS_TAG}
      ref={ref}
      className={cn(addressVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
