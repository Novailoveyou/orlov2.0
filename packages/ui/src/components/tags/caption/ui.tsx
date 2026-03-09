import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { CAPTION_TAG } from './constants'
import { captionVariants } from './utils'
import { CaptionProps } from './model'

/**
 * @description <Caption> component to display <caption> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 * @remarks
 * The <caption> HTML element specifies the caption (or title) of a table, providing the table an accessible name or accessible description.
 */
export function Caption({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CaptionProps): JSX.Element {
  const Comp = asChild ? Slot : CAPTION_TAG

  return (
    <Comp
      data-slot={CAPTION_TAG}
      ref={ref}
      className={cn(captionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
