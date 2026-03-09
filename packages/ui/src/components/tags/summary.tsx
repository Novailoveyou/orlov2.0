import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'summary'

export const summaryVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SummaryProps = AsChildProp &
  VariantProps<typeof summaryVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Summary> component to display <summary> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 * @remarks
 * The <summary> HTML element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 */
export function Summary({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SummaryProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(summaryVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
