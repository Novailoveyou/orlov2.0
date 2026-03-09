import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'ins'

export const insVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:underline',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type InsProps = AsChildProp &
  VariantProps<typeof insVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Ins> component to display <ins> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
 * @remarks
 * The <ins> HTML element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.
 */
export function Ins({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: InsProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(insVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
