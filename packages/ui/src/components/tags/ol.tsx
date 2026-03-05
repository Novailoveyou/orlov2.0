import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'ol'

export const olVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:m-0 ui:p-0',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type OlProps = AsChildProp &
  VariantProps<typeof olVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Ol> component to display <ol> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 * @todo fill in tsdoc
 */
export function Ol({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: OlProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      id={id}
      className={cn(olVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
