import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'source'

export const sourceVariants = cva('', {
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

type SourceProps = AsChildProp &
  VariantProps<typeof sourceVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Source> component to display <source> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 * @remarks
 * The <source> HTML element specifies one or more media resources for the <picture>, <audio>, and <video> elements. It is a void element, which means that it has no content and does not require a closing tag. This element is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 */
export function Source({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SourceProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(sourceVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
