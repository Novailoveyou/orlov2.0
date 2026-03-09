import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'audio'

export const audioVariants = cva('', {
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

type AudioProps = AsChildProp &
  VariantProps<typeof audioVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Audio> component to display <audio> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 * @remarks
 * The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 */
export function Audio({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AudioProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(audioVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
