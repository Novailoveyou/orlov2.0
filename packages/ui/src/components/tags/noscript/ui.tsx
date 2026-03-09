import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { NOSCRIPT_TAG } from './constants'
import { noscriptVariants } from './utils'
import { NoscriptProps } from './model'

/**
 * @description <Noscript> component to display <noscript> tag
 * @remarks
 * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
 */
export function Noscript({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: NoscriptProps): JSX.Element {
  const Comp = asChild ? Slot : NOSCRIPT_TAG

  return (
    <Comp
      data-slot={NOSCRIPT_TAG}
      ref={ref}
      className={cn(noscriptVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
