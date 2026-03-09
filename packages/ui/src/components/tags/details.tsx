import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'details'

export const detailsVariants = cva('', {
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

type DetailsProps = AsChildProp &
  VariantProps<typeof detailsVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Details> component to display <details> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 * @remarks
 * The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the <summary> element.
 * A disclosure widget is typically presented onscreen using a small triangle that rotates (or twists) to indicate open/closed state, with a label next to the triangle. The contents of the <summary> element are used as the label for the disclosure widget. The contents of the <details> provide the accessible description for the <summary>.
 */
export function Details({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DetailsProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(detailsVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
