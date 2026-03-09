import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'map'

export const mapVariants = cva('', {
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

type MapProps = AsChildProp &
  VariantProps<typeof mapVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Map> component to display <map> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 * @remarks
 * The <map> HTML element is used with <area> elements to define an image map (a clickable link area).
 */
export function Map({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MapProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(mapVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
