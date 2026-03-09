import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'del'

export const delVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:line-through',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type DelProps = AsChildProp &
  VariantProps<typeof delVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Del> component to display <del> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
 * @remarks
 * The <del> HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.
 */
export function Del({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DelProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(delVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
