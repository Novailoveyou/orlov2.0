import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { LINK_TAG } from './constants'
import { linkVariants } from './utils'
import { LinkProps } from './model'

/**
 * @description <Link> component to display <link> tag
 * @remarks
 * The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 */
export function Link({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LinkProps): JSX.Element {
  const Comp = asChild ? Slot : LINK_TAG

  return (
    <Comp
      data-slot={LINK_TAG}
      ref={ref}
      className={cn(linkVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
