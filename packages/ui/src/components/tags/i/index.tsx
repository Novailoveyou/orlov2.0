import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { I_TAG } from './constants'
import { iVariants } from './utils'
import { IProps } from './model'

/**
 * @description <I> component to display <i> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 * @remarks
 * The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.
 */
export function I({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: IProps): JSX.Element {
  const Comp = asChild ? Slot : I_TAG

  return (
    <Comp
      data-slot={I_TAG}
      ref={ref}
      className={cn(iVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
