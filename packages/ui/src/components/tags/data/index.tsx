import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DATA_TAG } from './constants'
import { dataVariants } from './utils'
import { DataProps } from './model'

/**
 * @description <Data> component to display <data>
 * @remarks
 * The <data> HTML element links a given piece of content with a machine-readable translation.
 * If the content is time- or date-related, the <time> element must be used.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 * @example
 * ```tsx
 * const Product = () => <Data value='12345'>Product Name</Data>
 * ```
 */
export function Data({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DataProps): JSX.Element {
  const Comp = asChild ? Slot : DATA_TAG

  return (
    <Comp
      data-slot={DATA_TAG}
      ref={ref}
      className={cn(dataVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
