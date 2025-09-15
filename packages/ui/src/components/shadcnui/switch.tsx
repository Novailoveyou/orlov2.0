import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/utils/index'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot='switch'
      className={cn(
        'ui:peer ui:inline-flex ui:items-center ui:data-[state=checked]:bg-primary ui:data-[state=unchecked]:bg-input ui:dark:data-[state=unchecked]:bg-input/80 ui:disabled:opacity-50 ui:shadow-xs ui:border ui:border-transparent ui:focus-visible:border-ring ui:rounded-full ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:w-8 ui:h-[1.15rem] ui:transition-all ui:disabled:cursor-not-allowed ui:shrink-0',
        className,
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot='switch-thumb'
        className={cn(
          'ui:block ui:bg-background ui:dark:data-[state=checked]:bg-primary-foreground ui:dark:data-[state=unchecked]:bg-foreground ui:rounded-full ui:ring-0 ui:size-4 ui:transition-transform ui:data-[state=checked]:translate-x-[calc(100%-2px)] ui:data-[state=unchecked]:translate-x-0 ui:pointer-events-none',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
