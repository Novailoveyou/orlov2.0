import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'video'

export const videoVariants = cva('', {
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

type VideoProps = AsChildProp &
  VariantProps<typeof videoVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Video> component to display <video> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * @remarks
 * The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience.
 */
export function Video({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: VideoProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(videoVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
