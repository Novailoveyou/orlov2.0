import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'fieldset'

export const fieldsetVariants = cva('', {
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

type FieldsetProps = AsChildProp &
  VariantProps<typeof fieldsetVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Fieldset> component to display <fieldset> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 * @remarks
 * The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form.
 */
export function Fieldset({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FieldsetProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(fieldsetVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
