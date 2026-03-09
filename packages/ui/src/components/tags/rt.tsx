import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'rt'

export const rtVariants = cva('', {
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

type RtProps = AsChildProp &
  VariantProps<typeof rtVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Rt> component to display <rt> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
 * @remarks
 * The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.
 */
export function Rt({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: RtProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(rtVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
