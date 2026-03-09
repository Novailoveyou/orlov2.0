import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { AREA_TAG } from './constants'
import { areaVariants } from './utils'
import { AreaProps } from './model'

/**
 * @description <Area> component to display <area> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 * @remarks
 * The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links.
 * This element is used only within a <map> element.
 */
export function Area({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AreaProps): JSX.Element {
  const Comp = asChild ? Slot : AREA_TAG

  return (
    <Comp
      data-slot={AREA_TAG}
      ref={ref}
      className={cn(areaVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
