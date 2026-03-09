import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { AUDIO_TAG } from './constants'
import { audioVariants } from './utils'
import { AudioProps } from './model'

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
  const Comp = asChild ? Slot : AUDIO_TAG

  return (
    <Comp
      data-slot={AUDIO_TAG}
      ref={ref}
      className={cn(audioVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
