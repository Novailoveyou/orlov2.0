import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'track'

export const trackVariants = cva('', {
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

type TrackProps = AsChildProp &
  VariantProps<typeof trackVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Track> component to display <track> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 * @remarks
 * The <track> HTML element is used as a child of the media elements, <audio> and <video>. Each track element lets you specify a timed text track (or time-based data) that can be displayed in parallel with the media element, for example to overlay subtitles or closed captions on top of a video or alongside audio tracks.
 * Multiple tracks can be specified for a media element, containing different kinds of timed text data, or timed text data that has been translated for different locales. The data that is used will either be the track that has been set to be the default, or a kind and translation based on user preferences.
 * The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 */
export function Track({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TrackProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(trackVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
