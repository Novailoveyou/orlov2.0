import { ComponentProps } from 'react'

type BaseHtmlProps = ComponentProps<'html'>

type HtmlProps = BaseHtmlProps & Required<Pick<BaseHtmlProps, 'lang' | 'dir'>>

/**
 * @description Html component to display html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 */
export function Html({
  children,
  lang = 'en',
  dir = 'ltr',
  suppressHydrationWarning = true,
  ...props
}: HtmlProps) {
  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}>
      {children}
    </html>
  )
}
