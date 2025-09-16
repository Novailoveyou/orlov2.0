import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '../../utils/index'

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot='resizable-panel-group'
      className={cn(
        'ui:flex ui:data-[panel-group-direction=vertical]:flex-col ui:w-full ui:h-full',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot='resizable-panel' {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot='resizable-handle'
      className={cn(
        'ui:after:left-1/2 ui:data-[panel-group-direction=vertical]:after:left-0 ui:after:absolute ui:relative ui:after:inset-y-0 ui:flex ui:justify-center ui:items-center ui:bg-border ui:focus-visible:outline-hidden ui:focus-visible:ring-1 ui:focus-visible:ring-ring ui:focus-visible:ring-offset-1 ui:after:w-1 ui:data-[panel-group-direction=vertical]:after:w-full ui:data-[panel-group-direction=vertical]:w-full ui:w-px ui:data-[panel-group-direction=vertical]:after:h-1 ui:data-[panel-group-direction=vertical]:h-px ui:[&[data-panel-group-direction=vertical]>div]:rotate-90 ui:after:-translate-x-1/2 ui:data-[panel-group-direction=vertical]:after:-translate-y-1/2 ui:data-[panel-group-direction=vertical]:after:translate-x-0',
        className,
      )}
      {...props}>
      {withHandle && (
        <div className='ui:z-10 ui:flex ui:justify-center ui:items-center ui:bg-border ui:border ui:rounded-xs ui:w-3 ui:h-4'>
          <GripVerticalIcon className='ui:size-2.5' />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
