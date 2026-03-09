import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'hgroup'

export const hgroupVariants = cva('', {
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

type HgroupProps = AsChildProp &
  VariantProps<typeof hgroupVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Hgroup> component to display <hgroup> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
 * @remarks
 * The <hgroup> HTML element represents a heading and related content. It groups a single <h1>–<h6> element with one or more <p>.
 */
export function Hgroup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HgroupProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(hgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
