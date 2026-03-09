import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DEL_TAG } from './constants'
import { delVariants } from './utils'
import { DelProps } from './model'

/**
 * @description <Del> component to display <del>
 * @remarks
 * The <del> HTML element represents a range of text that has been deleted from a document.
 * This can be used when rendering "track changes" or source code diff information, for example.
 * The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
 * @example
 * ```tsx
 * const DeletedText = () => <Del>This text was removed</Del>
 * ```
 */
export function Del({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DelProps): JSX.Element {
  const Comp = asChild ? Slot : DEL_TAG

  return (
    <Comp
      data-slot={DEL_TAG}
      ref={ref}
      className={cn(delVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
