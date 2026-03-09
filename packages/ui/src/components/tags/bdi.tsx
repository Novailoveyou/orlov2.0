import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'bdi'

export const bdiVariants = cva('', {
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

type BdiProps = AsChildProp &
  VariantProps<typeof bdiVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Bdi> component to display <bdi> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 * @remarks
 * The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 */
export function Bdi({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BdiProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(bdiVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
