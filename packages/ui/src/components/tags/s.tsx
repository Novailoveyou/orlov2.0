import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 's'

export const sVariants = cva('', {
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

type SProps = AsChildProp &
  VariantProps<typeof sVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <S> component to display <s> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 * @remarks
 * The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.
 */
export function S({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(sVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
