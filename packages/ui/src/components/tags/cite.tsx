import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'cite'

export const citeVariants = cva('', {
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

type CiteProps = AsChildProp &
  VariantProps<typeof citeVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Cite> component to display <cite> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @remarks
 * The <cite> HTML element is used to mark up the title of a creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 */
export function Cite({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CiteProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(citeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
