import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { NAV_TAG } from './constants'
import { navVariants } from './utils'
import { NavProps } from './model'

/**
 * @description <Nav> component to display <nav> tag
 * @remarks
 * The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
 */
export function Nav({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: NavProps): JSX.Element {
  const Comp = asChild ? Slot : NAV_TAG

  return (
    <Comp
      data-slot={NAV_TAG}
      ref={ref}
      className={cn(navVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
