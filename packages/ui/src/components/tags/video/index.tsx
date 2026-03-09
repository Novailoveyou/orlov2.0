import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { VIDEO_TAG } from './constants'
import { videoVariants } from './utils'
import { VideoProps } from './model'

/**
 * @description <Video> component to display <video> tag
 * @remarks
 * The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 */
export function Video({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: VideoProps): JSX.Element {
  const Comp = asChild ? Slot : VIDEO_TAG

  return (
    <Comp
      data-slot={VIDEO_TAG}
      ref={ref}
      className={cn(videoVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
