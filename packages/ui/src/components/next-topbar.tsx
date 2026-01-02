import NextTopLoaderBase from 'nextjs-toploader'
import { ComponentProps } from 'react'

export const NextTopLoader = ({
  color = '#2299DD',
  initialPosition = 0.08,
  crawlSpeed = 200,
  height = 3,
  crawl = true,
  showSpinner = false,
  easing = 'ease',
  speed = 200,
  shadow = false,
  template = '<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
  zIndex = 1600,
  showAtBottom = true,
  showForHashAnchor = false,
}: ComponentProps<typeof NextTopLoaderBase>) => {
  return (
    <NextTopLoaderBase
      color={color}
      initialPosition={initialPosition}
      crawlSpeed={crawlSpeed}
      height={height}
      crawl={crawl}
      showSpinner={showSpinner}
      easing={easing}
      speed={speed}
      shadow={shadow}
      template={template}
      zIndex={zIndex}
      showAtBottom={showAtBottom}
      showForHashAnchor={showForHashAnchor}
    />
  )
}
