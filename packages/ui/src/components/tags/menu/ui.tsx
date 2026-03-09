import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { MENU_TAG } from './constants'
import { menuVariants } from './utils'
import { MenuProps } from './model'

/**
 * @description <Menu> component to display <menu> tag
 * @remarks
 * The <menu> HTML element is described in the HTML specification as a semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 */
export function Menu({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: MenuProps): JSX.Element {
  const Comp = asChild ? Slot : MENU_TAG

  return (
    <Comp
      data-slot={MENU_TAG}
      ref={ref}
      id={id}
      className={cn(menuVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
