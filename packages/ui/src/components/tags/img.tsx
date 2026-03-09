import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'img'

export const imgVariants = cva('', {
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

type ImgProps = AsChildProp &
  VariantProps<typeof imgVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(imgVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
