import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'picture'

export const pictureVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: '',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type PictureProps = AsChildProp &
  VariantProps<typeof pictureVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Picture> component to display <picture> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 * @remarks
 * The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.
 * The browser will consider each child <source> element and choose the best match among them. If no matches are found—or the browser doesn't support the <picture> element—the URL of the <img> element's src attribute is selected. The selected image is then presented in the space occupied by the <img> element.
 */
export function Picture({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: PictureProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(pictureVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
