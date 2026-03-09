import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { FOOTER_TAG } from './constants'
import { footerVariants } from './utils'
import { FooterProps } from './model'

/**
 * @description <Footer> component to display <footer> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 * @remarks
 * The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents.
 */
export function Footer({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FooterProps): JSX.Element {
  const Comp = asChild ? Slot : FOOTER_TAG

  return (
    <Comp
      data-slot={FOOTER_TAG}
      ref={ref}
      className={cn(footerVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
