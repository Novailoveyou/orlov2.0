import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'u'

export const uVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:underline',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type UProps = AsChildProp &
  VariantProps<typeof uVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <U> component to display <u> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
 * @remarks
 * The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a single solid underline, but may be altered using CSS.
 * This element used to be called the "Underline" element in older versions of HTML, and is still sometimes misused in this way. To underline text, you should instead apply a style that includes the CSS text-decoration property set to underline.
 */
export function U({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: UProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(uVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
