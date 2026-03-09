import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'tbody'

export const tbodyVariants = cva('', {
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

type TbodyProps = AsChildProp &
  VariantProps<typeof tbodyVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Tbody> component to display <tbody> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 * @remarks
 * The <tbody> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of a table's (main) data.
 */
export function Tbody({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TbodyProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(tbodyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
