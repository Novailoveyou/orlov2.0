import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { HEADER_TAG } from './constants'
import { headerVariants } from './utils'
import { HeaderProps } from './model'

/**
 * @description <Header> component to display <header> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
 * @remarks
 * The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
 */
export function Header({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HeaderProps): JSX.Element {
  const Comp = asChild ? Slot : HEADER_TAG

  return (
    <Comp
      data-slot={HEADER_TAG}
      ref={ref}
      className={cn(headerVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
