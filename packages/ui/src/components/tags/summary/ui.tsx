import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SUMMARY_TAG } from './constants'
import { summaryVariants } from './utils'
import { SummaryProps } from './model'

/**
 * @description <Summary> component to display <summary> tag
 * @remarks
 * The <summary> HTML element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 */
export function Summary({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SummaryProps): JSX.Element {
  const Comp = asChild ? Slot : SUMMARY_TAG

  return (
    <Comp
      data-slot={SUMMARY_TAG}
      ref={ref}
      className={cn(summaryVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
