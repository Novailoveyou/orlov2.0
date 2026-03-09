import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { A_TAG } from './constants'
import { aVariants } from './utils'
import { AProps } from './model'

/**
 * @description <A> component to display <a>
 * @remarks
 * The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * Content within each <a> should indicate the link's destination. If the href attribute is present, pressing the enter key while focused on the <a> element will activate it.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * @example
 * ```tsx
 * const HomeLink = () => <A href='/'>Go To Home</A>
 * ```
 */
export function A({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AProps): JSX.Element {
  const Comp = asChild ? Slot : A_TAG

  return (
    <Comp
      data-slot={A_TAG}
      ref={ref}
      className={cn(aVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
