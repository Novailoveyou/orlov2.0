import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'q'

export const qVariants = cva('', {
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

type QProps = AsChildProp &
  VariantProps<typeof qVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Q> component to display <q> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 * @remarks
 * The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element.
 */
export function Q({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: QProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(qVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
