import { cn } from '../utils'
import { ComponentProps } from 'react'
import { Span } from './tags/span'
import type { IconType } from 'react-icons/lib'

type SpanProps = ComponentProps<typeof Span>

type IconProps = Omit<SpanProps, 'children'> &
  Required<Pick<SpanProps, 'aria-label'>> & {
    Icon: IconType
    width: `w-${string}`
    height: `h-${string}`
  }

/**
 * @description Icon component to display an icon
 */
export const Icon = ({
  className,
  Icon: IconProp,
  width,
  height,
  'aria-label': ariaLabel,
  ...props
}: IconProps) => {
  return (
    <Span
      className={cn(
        `ui:inline-block ui:${width} ui:min-${width} ui:max-${width} ui:${height} ui:min-${height} ui:max-${height}`,
        className,
      )}
      {...props}>
      <IconProp
        aria-label={ariaLabel}
        className='ui:w-full ui:min-w-full ui:max-w-full ui:h-full ui:min-h-full ui:max-h-full'
      />
    </Span>
  )
}
