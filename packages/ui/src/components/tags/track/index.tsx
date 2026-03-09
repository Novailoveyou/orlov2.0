import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TRACK_TAG } from './constants'
import { trackVariants } from './utils'
import { TrackProps } from './model'

/**
 * @description <Track> component to display <track> tag
 * @remarks
 * The <track> HTML element is used as a child of the media elements, <audio> and <video>. Each track element lets you specify a timed text track (or time-based data) that can be displayed in parallel with the media element, for example to overlay subtitles or closed captions on top of a video or alongside audio tracks.
 * Multiple tracks can be specified for a media element, containing different kinds of timed text data, or timed text data that has been translated for different locales. The data that is used will either be the track that has been set to be the default, or a kind and translation based on user preferences.
 * The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 */
export function Track({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TrackProps): JSX.Element {
  const Comp = asChild ? Slot : TRACK_TAG

  return (
    <Comp
      data-slot={TRACK_TAG}
      ref={ref}
      className={cn(trackVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
