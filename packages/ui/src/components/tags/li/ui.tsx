import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { LI_TAG } from './constants'
import { liVariants } from './utils'
import { LiProps } from './model'

/**
 * @description <Li> component to display <li> tag
 * @remarks
 * The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 */
export function Li({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: LiProps): JSX.Element {
  const Comp = asChild ? Slot : LI_TAG

  return (
    <Comp
      data-slot={LI_TAG}
      ref={ref}
      id={id}
      className={cn(liVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
