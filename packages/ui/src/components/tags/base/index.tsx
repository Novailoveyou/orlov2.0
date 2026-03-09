import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BASE_TAG } from './constants'
import { baseVariants } from './utils'
import { BaseProps } from './model'

/**
 * @description <Base> component to display <base> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
 * @remarks
 * The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document.
 * A document's used base URL can be accessed by scripts with Node.baseURI. If the document has no <base> elements, then baseURI defaults to location.href.
 */
export function Base({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BaseProps): JSX.Element {
  const Comp = asChild ? Slot : BASE_TAG

  return (
    <Comp
      data-slot={BASE_TAG}
      ref={ref}
      className={cn(baseVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
