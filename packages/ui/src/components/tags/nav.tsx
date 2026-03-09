import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'nav'

export const navVariants = cva('', {
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

type NavProps = AsChildProp &
  VariantProps<typeof navVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Nav> component to display <nav> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
 * @remarks
 * The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 */
export function Nav({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: NavProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(navVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
