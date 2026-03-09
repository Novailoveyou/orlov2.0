import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SOURCE_TAG } from './constants'
import { sourceVariants } from './utils'
import { SourceProps } from './model'

/**
 * @description <Source> component to display <source> tag
 * @remarks
 * The <source> HTML element specifies one or more media resources for the <picture>, <audio>, and <video> elements. It is a void element, which means that it has no content and does not require a closing tag. This element is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 */
export function Source({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SourceProps): JSX.Element {
  const Comp = asChild ? Slot : SOURCE_TAG

  return (
    <Comp
      data-slot={SOURCE_TAG}
      ref={ref}
      className={cn(sourceVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
