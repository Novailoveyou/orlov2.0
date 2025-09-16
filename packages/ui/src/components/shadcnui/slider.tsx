import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '../../utils/index'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot='slider'
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'ui:relative ui:flex ui:data-[orientation=vertical]:flex-col ui:items-center ui:data-[disabled]:opacity-50 ui:data-[orientation=vertical]:w-auto ui:w-full ui:data-[orientation=vertical]:h-full ui:data-[orientation=vertical]:min-h-44 ui:touch-none ui:select-none',
        className,
      )}
      {...props}>
      <SliderPrimitive.Track
        data-slot='slider-track'
        className={cn(
          'ui:relative ui:bg-muted ui:rounded-full ui:data-[orientation=horizontal]:w-full ui:data-[orientation=vertical]:w-1.5 ui:data-[orientation=horizontal]:h-1.5 ui:data-[orientation=vertical]:h-full ui:overflow-hidden ui:grow',
        )}>
        <SliderPrimitive.Range
          data-slot='slider-range'
          className={cn(
            'ui:absolute ui:bg-primary ui:data-[orientation=vertical]:w-full ui:data-[orientation=horizontal]:h-full',
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot='slider-thumb'
          key={index}
          className='ui:block ui:bg-background ui:disabled:opacity-50 ui:shadow-sm ui:border ui:border-primary ui:rounded-full ui:focus-visible:outline-hidden ui:hover:ring-4 ui:focus-visible:ring-4 ui:ring-ring/50 ui:size-4 ui:transition-[color,box-shadow] ui:disabled:pointer-events-none ui:shrink-0'
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
