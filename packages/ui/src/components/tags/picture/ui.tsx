import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { PICTURE_TAG } from './constants'
import { pictureVariants } from './utils'
import { PictureProps } from './model'

/**
 * @description <Picture> component to display <picture> tag
 * @remarks
 * The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.
 * The browser will consider each child <source> element and choose the best match among them. If no matches are found—or the browser doesn't support the <picture> element—the URL of the <img> element's src attribute is selected. The selected image is then presented in the space occupied by the <img> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 */
export function Picture({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: PictureProps): JSX.Element {
  const Comp = asChild ? Slot : PICTURE_TAG

  return (
    <Comp
      data-slot={PICTURE_TAG}
      ref={ref}
      className={cn(pictureVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
