import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'data'

export const dataVariants = cva('', {
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

type DataProps = AsChildProp &
  VariantProps<typeof dataVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Data> component to display <data> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 * @remarks
 * The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used.
 */
export function Data({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DataProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(dataVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
