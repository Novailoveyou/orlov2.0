import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { IMG_TAG } from './constants'
import { imgVariants } from './utils'
import { ImgProps } from './model'

/**
 * @description <Img> component to display <img> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 * @remarks
 * The <img> HTML element embeds an image into the document.
 */
export function Img({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ImgProps): JSX.Element {
  const Comp = asChild ? Slot : IMG_TAG

  return (
    <Comp
      data-slot={IMG_TAG}
      ref={ref}
      className={cn(imgVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
