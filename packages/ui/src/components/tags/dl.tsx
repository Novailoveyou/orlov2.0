import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'dl'

export const dlVariants = cva('', {
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

type DlProps = AsChildProp &
  VariantProps<typeof dlVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Dl> component to display <dl> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
 * @remarks
 * The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 */
export function Dl({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DlProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(dlVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
