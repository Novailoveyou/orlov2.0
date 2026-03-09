import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'mark'

export const markVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:bg-yellow-200 ui:text-foreground dark:ui:bg-yellow-700/40',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type MarkProps = AsChildProp &
  VariantProps<typeof markVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Mark> component to display <mark> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 * @remarks
 * The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.
 */
export function Mark({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MarkProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(markVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
