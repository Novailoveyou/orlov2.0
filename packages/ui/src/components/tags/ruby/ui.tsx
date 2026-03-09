import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { RUBY_TAG } from './constants'
import { rubyVariants } from './utils'
import { RubyProps } from './model'

/**
 * @description <Ruby> component to display <ruby> tag
 * @remarks
 * The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 * The term ruby originated as a unit of measurement used by typesetters, representing the smallest size that text can be printed on newsprint while remaining legible.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
 */
export function Ruby({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RubyProps): JSX.Element {
  const Comp = asChild ? Slot : RUBY_TAG

  return (
    <Comp
      data-slot={RUBY_TAG}
      ref={ref}
      className={cn(rubyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
