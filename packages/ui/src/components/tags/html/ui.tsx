import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import Locale from 'intl-locale-textinfo-polyfill'

import { cn } from '../../../utils'
import { HTML_TAG } from './constants'
import { htmlVariants } from './utils'
import { HtmlProps } from './model'

/**
 * @description <Html> component to display <html> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 * @remarks
 * The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. There can be only one <html> element in a document.
 */
export function Html({
  asChild,
  variant,
  ref,
  className,
  children,
  lang: locale = 'en',
  dir: dirProp = 'ltr',
  suppressHydrationWarning = true,
  ...props
}: HtmlProps): JSX.Element {
  const Comp = asChild ? Slot : HTML_TAG

  const { direction: dir = dirProp } = new Locale(locale).getTextInfo()

  return (
    <Comp
      data-slot={HTML_TAG}
      ref={ref}
      lang={locale}
      dir={dir}
      suppressHydrationWarning={suppressHydrationWarning}
      className={cn(htmlVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
