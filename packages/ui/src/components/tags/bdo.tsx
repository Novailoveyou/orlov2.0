import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'bdo'

export const bdoVariants = cva('', {
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

type BdoProps = AsChildProp &
  VariantProps<typeof bdoVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Bdo> component to display <bdo> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
 * @remarks
 * The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 */
export function Bdo({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BdoProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(bdoVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
