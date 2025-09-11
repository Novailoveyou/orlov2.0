import NextImage from 'next/image'
import { cn } from '../utils'
import { ComponentProps } from 'react'

const BLUR_DATA_URL =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

type ImageProps = ComponentProps<typeof NextImage> & {
  desiredWidth?: number
}

/**
 * @description Image component to display an image with optimized loading and optional blur placeholder
 * @see https://nextjs.org/docs/api-reference/next/image
 * @todo finish width calculation
 */
export const Image = ({
  className,
  placeholder = 'blur',
  blurDataURL = BLUR_DATA_URL,
  quality = 100,
  desiredWidth,
  ...props
}: ImageProps) => {
  console.log('desiredWidth: ', desiredWidth)
  // const calculatedWidth = toNumber(desiredWidth)
  // const calculatedHeight = props.height || 0

  return (
    <NextImage
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={cn(
        'ui:w-full ui:max-w-full ui:h-auto ui:max-h-full',
        className,
      )}
      {...props}
    />
  )
}
