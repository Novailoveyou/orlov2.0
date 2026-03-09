import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'object'

export const objectVariants = cva('', {
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

type ObjectProps = AsChildProp &
  VariantProps<typeof objectVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Object> component to display <object> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
 * @remarks
 * The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 */
export function Object({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ObjectProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(objectVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
