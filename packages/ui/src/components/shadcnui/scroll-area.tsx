import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/utils/index'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot='scroll-area'
      className={cn('ui:relative', className)}
      {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot='scroll-area-viewport'
        className='ui:rounded-[inherit] ui:focus-visible:outline-1 ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:size-full ui:transition-[color,box-shadow]'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      className={cn(
        'ui:flex ui:p-px ui:transition-colors ui:touch-none ui:select-none',
        orientation === 'vertical' &&
          'ui:h-full ui:w-2.5 ui:border-l ui:border-l-transparent',
        orientation === 'horizontal' &&
          'ui:h-2.5 ui:flex-col ui:border-t ui:border-t-transparent',
        className,
      )}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot='scroll-area-thumb'
        className='ui:relative ui:flex-1 ui:bg-border ui:rounded-full'
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
