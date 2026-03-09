import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'aside'

export const asideVariants = cva('', {
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

type AsideProps = AsChildProp &
  VariantProps<typeof asideVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Aside> component to display <aside> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
 * @remarks
 * The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 */
export function Aside({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AsideProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(asideVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
