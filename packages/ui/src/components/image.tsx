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
  src,
  alt,
  width: widthProp,
  height: heightProp,
  fill,
  loader,
  quality = 100,
  priority = false,
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL = BLUR_DATA_URL,
  unoptimized = false,
  overrideSrc,
  onLoadingComplete,
  layout,
  objectFit,
  objectPosition,
  lazyBoundary,
  lazyRoot,
  className,
  desiredWidth,
  ...props
}: ImageProps) => {
  console.log('desiredWidth: ', desiredWidth)
  // const calculatedWidth = toNumber(desiredWidth)
  // const calculatedHeight = props.height || 0

  const isSrcObj = typeof src === 'object'

  const width = Number(
    isSrcObj ? ('default' in src ? src.default.width : src.width) : widthProp,
  )

  const height = Number(
    isSrcObj
      ? 'default' in src
        ? src.default.height
        : src.height
      : heightProp,
  )

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      loader={loader}
      quality={quality}
      priority={priority}
      loading={priority && loading === 'lazy' ? undefined : loading}
      placeholder={placeholder}
      blurDataURL={placeholder === 'blur' ? blurDataURL : undefined}
      unoptimized={unoptimized}
      overrideSrc={overrideSrc}
      onLoadingComplete={onLoadingComplete}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      lazyBoundary={lazyBoundary}
      lazyRoot={lazyRoot}
      className={cn(
        'ui:w-full ui:max-w-full ui:h-auto ui:max-h-full',
        className,
      )}
      {...props}
    />
  )
}
