import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'span'

export const spanVariants = cva('', {
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

type SpanProps = AsChildProp &
  VariantProps<typeof spanVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Span> component to display <span> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 * @remarks
 * The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element.
 */
export function Span({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SpanProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(spanVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
