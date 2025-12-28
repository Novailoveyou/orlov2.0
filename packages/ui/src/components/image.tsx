import NextImage from 'next/image'
import { cn } from '../utils'
import type { ComponentProps } from 'react'

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
  style,
  ...props
}: ImageProps) => {
  const isSrcObj = typeof src === 'object'

  const sourceWidth = Number(
    isSrcObj ? ('default' in src ? src.default.width : src.width) : widthProp,
  )

  const sourceHeight = Number(
    isSrcObj
      ? 'default' in src
        ? src.default.height
        : src.height
      : heightProp,
  )

  const width = desiredWidth || sourceWidth

  const height = desiredWidth
    ? Math.round((sourceHeight / sourceWidth) * desiredWidth)
    : sourceHeight

  const isPlaceholderNeeded = width > 40 && height > 40

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
      placeholder={isPlaceholderNeeded ? placeholder : 'empty'}
      blurDataURL={
        isPlaceholderNeeded && placeholder === 'blur' ? blurDataURL : undefined
      }
      unoptimized={unoptimized}
      overrideSrc={overrideSrc}
      onLoadingComplete={onLoadingComplete}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
      lazyBoundary={lazyBoundary}
      lazyRoot={lazyRoot}
      className={cn(
        'ui:max-w-full ui:max-h-full ui:img',
        desiredWidth
          ? `ui:w-(--dynamic-width) ui:h-(--dynamic-height)`
          : 'ui:w-full ui:h-auto',
        className,
      )}
      style={
        desiredWidth
          ? {
              // @ts-expect-error CSS variables in style object
              '--dynamic-width': `${width}px`,
              '--dynamic-height': `${height}px`,
              ...style,
            }
          : style
      }
      {...props}
    />
  )
}
