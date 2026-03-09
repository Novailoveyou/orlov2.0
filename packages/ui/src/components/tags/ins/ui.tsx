import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { INS_TAG } from './constants'
import { insVariants } from './utils'
import { InsProps } from './model'

/**
 * @description <Ins> component to display <ins> tag
 * @remarks
 * The <ins> HTML element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
 */
export function Ins({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: InsProps): JSX.Element {
  const Comp = asChild ? Slot : INS_TAG

  return (
    <Comp
      data-slot={INS_TAG}
      ref={ref}
      className={cn(insVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
