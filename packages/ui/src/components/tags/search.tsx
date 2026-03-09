import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'search'

export const searchVariants = cva('', {
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

type SearchProps = AsChildProp &
  VariantProps<typeof searchVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Search> component to display <search> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
 * @remarks
 * The <search> HTML element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The <search> element semantically identifies the purpose of the element's contents as having search or filtering capabilities. The search or filtering functionality can be for the website or application, the current web page or document, or the entire Internet or subsection thereof.
 */
export function Search({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SearchProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(searchVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
