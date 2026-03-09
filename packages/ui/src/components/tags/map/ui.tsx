import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { MAP_TAG } from './constants'
import { mapVariants } from './utils'
import { MapProps } from './model'

/**
 * @description <Map> component to display <map> tag
 * @remarks
 * The <map> HTML element is used with <area> elements to define an image map (a clickable link area).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 */
export function Map({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MapProps): JSX.Element {
  const Comp = asChild ? Slot : MAP_TAG

  return (
    <Comp
      data-slot={MAP_TAG}
      ref={ref}
      className={cn(mapVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
