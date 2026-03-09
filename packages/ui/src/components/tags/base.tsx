import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'base'

export const baseVariants = cva('', {
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

type BaseProps = AsChildProp &
  VariantProps<typeof baseVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Base> component to display <base> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
 * @remarks
 * The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document.
 * A document's used base URL can be accessed by scripts with Node.baseURI. If the document has no <base> elements, then baseURI defaults to location.href.
 */
export function Base({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BaseProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(baseVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
