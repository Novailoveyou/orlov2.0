import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { EM_TAG } from './constants'
import { emVariants } from './utils'
import { EmProps } from './model'

/**
 * @description <Em> component to display <em> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 * @remarks
 * The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.
 */
export function Em({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: EmProps): JSX.Element {
  const Comp = asChild ? Slot : EM_TAG

  return (
    <Comp
      data-slot={EM_TAG}
      ref={ref}
      className={cn(emVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
