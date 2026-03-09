import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DL_TAG } from './constants'
import { dlVariants } from './utils'
import { DlProps } from './model'

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
  const Comp = asChild ? Slot : DL_TAG

  return (
    <Comp
      data-slot={DL_TAG}
      ref={ref}
      className={cn(dlVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
