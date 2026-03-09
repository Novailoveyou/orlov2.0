import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { Q_TAG } from './constants'
import { qVariants } from './utils'
import { QProps } from './model'

/**
 * @description <Q> component to display <q> tag
 * @remarks
 * The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 */
export function Q({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: QProps): JSX.Element {
  const Comp = asChild ? Slot : Q_TAG

  return (
    <Comp
      data-slot={Q_TAG}
      ref={ref}
      className={cn(qVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
