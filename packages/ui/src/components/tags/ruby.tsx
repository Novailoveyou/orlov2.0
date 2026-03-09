import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'ruby'

export const rubyVariants = cva('', {
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

type RubyProps = AsChildProp &
  VariantProps<typeof rubyVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Ruby> component to display <ruby> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
 * @remarks
 * The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 * The term ruby originated as a unit of measurement used by typesetters, representing the smallest size that text can be printed on newsprint while remaining legible.
 */
export function Ruby({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RubyProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(rubyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
