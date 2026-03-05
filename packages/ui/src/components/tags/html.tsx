import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Locale from 'intl-locale-textinfo-polyfill'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'html'

export const htmlVariants = cva('', {
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

type BaseHTMLProps = ComponentProps<typeof TAG>

type HtmlProps = AsChildProp &
  VariantProps<typeof htmlVariants> &
  Required<Pick<BaseHTMLProps, 'lang'>> &
  Omit<BaseHTMLProps, 'lang'>

/**
 * @description <Html> component to display <html> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
 * @todo fill in tsdoc
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
  const Comp = asChild ? Slot : TAG

  const { direction: dir = dirProp } = new Locale(locale).getTextInfo()

  return (
    <Comp
      data-slot={TAG}
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
