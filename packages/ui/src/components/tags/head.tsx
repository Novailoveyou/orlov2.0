import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'head'

export const headVariants = cva('', {
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

type HeadProps = AsChildProp &
  VariantProps<typeof headVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Head> component to display <head> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
 * @remarks
 * The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets. There can be only one <head> element in an HTML document.
 * <head> primarily holds information for machine processing, not human-readability. For human-visible information, like top-level headings and listed authors, see the <header> element.
 */
export function Head({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HeadProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(headVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
