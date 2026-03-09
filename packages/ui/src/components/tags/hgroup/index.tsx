import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { HGROUP_TAG } from './constants'
import { hgroupVariants } from './utils'
import { HgroupProps } from './model'

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
  const Comp = asChild ? Slot : HGROUP_TAG

  return (
    <Comp
      data-slot={HGROUP_TAG}
      ref={ref}
      className={cn(hgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
