import { ComponentProps } from 'react'
import Locale from 'intl-locale-textinfo-polyfill'

type BaseHtmlProps = ComponentProps<'html'>

type HtmlProps = BaseHtmlProps & Required<Pick<BaseHtmlProps, 'lang'>>

/**
 * @description Html component to display html
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 */
export function Html({
  children,
  lang: locale = 'en',
  dir: dirProp = 'ltr',
  suppressHydrationWarning = true,
  ...props
}: HtmlProps) {
  const { direction: dir = dirProp } = new Locale(locale).getTextInfo()

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}>
      {children}
    </html>
  )
}
