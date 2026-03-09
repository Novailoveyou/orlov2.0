import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'em'

export const emVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type EmProps = AsChildProp &
  VariantProps<typeof emVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(emVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
