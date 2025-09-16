import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '../../utils/index'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot='separator'
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'ui:bg-border ui:data-[orientation=horizontal]:w-full ui:data-[orientation=vertical]:w-px ui:data-[orientation=horizontal]:h-px ui:data-[orientation=vertical]:h-full ui:shrink-0',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
