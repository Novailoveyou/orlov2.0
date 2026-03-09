import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'i'

export const iVariants = cva('', {
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

type IProps = AsChildProp &
  VariantProps<typeof iVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <I> component to display <i> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 * @remarks
 * The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.
 */
export function I({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: IProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(iVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
