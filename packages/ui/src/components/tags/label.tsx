import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'label'

export const labelVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type LabelProps = AsChildProp &
  VariantProps<typeof labelVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Label> component to display <label> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 * @remarks
 * The <label> HTML element represents a caption for an item in a user interface.
 */
export function Label({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LabelProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(labelVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
