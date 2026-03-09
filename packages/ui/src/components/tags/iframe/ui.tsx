import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { IFRAME_TAG } from './constants'
import { iframeVariants } from './utils'
import { IframeProps } from './model'

/**
 * @description <Iframe> component to display <iframe> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 * @remarks
 * The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one.
 */
export function Iframe({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: IframeProps): JSX.Element {
  const Comp = asChild ? Slot : IFRAME_TAG

  return (
    <Comp
      data-slot={IFRAME_TAG}
      ref={ref}
      className={cn(iframeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
