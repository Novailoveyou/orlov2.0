import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BODY_TAG } from './constants'
import { bodyVariants } from './utils'
import { BodyProps } from './model'

/**
 * @description <Body> component to display <body> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
 * @remarks
 * The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document.
 */
export function Body({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BodyProps): JSX.Element {
  const Comp = asChild ? Slot : BODY_TAG

  return (
    <Comp
      data-slot={BODY_TAG}
      ref={ref}
      className={cn(bodyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
