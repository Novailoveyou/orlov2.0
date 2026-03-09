import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BDO_TAG } from './constants'
import { bdoVariants } from './utils'
import { BdoProps } from './model'

/**
 * @description <Bdo> component to display <bdo> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
 * @remarks
 * The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 */
export function Bdo({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BdoProps): JSX.Element {
  const Comp = asChild ? Slot : BDO_TAG

  return (
    <Comp
      data-slot={BDO_TAG}
      ref={ref}
      className={cn(bdoVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
