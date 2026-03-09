import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'hr'

export const hrVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:border-0 ui:border-t',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type HrProps = AsChildProp &
  VariantProps<typeof hrVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Hr> component to display <hr> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 * @remarks
 * The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
export function Hr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HrProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(hrVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
