import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SEARCH_TAG } from './constants'
import { searchVariants } from './utils'
import { SearchProps } from './model'

/**
 * @description <Search> component to display <search> tag
 * @remarks
 * The <search> HTML element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The <search> element semantically identifies the purpose of the element's contents as having search or filtering capabilities. The search or filtering functionality can be for the website or application, the current web page or document, or the entire Internet or subsection thereof.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
 */
export function Search({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SearchProps): JSX.Element {
  const Comp = asChild ? Slot : SEARCH_TAG

  return (
    <Comp
      data-slot={SEARCH_TAG}
      ref={ref}
      className={cn(searchVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
