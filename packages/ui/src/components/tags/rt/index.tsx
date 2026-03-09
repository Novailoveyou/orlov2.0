import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { RT_TAG } from './constants'
import { rtVariants } from './utils'
import { RtProps } from './model'

/**
 * @description <Rt> component to display <rt> tag
 * @remarks
 * The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
 */
export function Rt({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RtProps): JSX.Element {
  const Comp = asChild ? Slot : RT_TAG

  return (
    <Comp
      data-slot={RT_TAG}
      ref={ref}
      className={cn(rtVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
