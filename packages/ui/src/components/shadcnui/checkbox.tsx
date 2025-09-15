import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/utils/index'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'ui:peer ui:data-[state=checked]:bg-primary ui:dark:bg-input/30 ui:dark:data-[state=checked]:bg-primary ui:disabled:opacity-50 ui:shadow-xs ui:border ui:border-input ui:data-[state=checked]:border-primary ui:aria-invalid:border-destructive ui:focus-visible:border-ring ui:rounded-[4px] ui:outline-none ui:aria-invalid:ring-destructive/20 ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:dark:aria-invalid:ring-destructive/40 ui:size-4 ui:data-[state=checked]:text-primary-foreground ui:transition-shadow ui:disabled:cursor-not-allowed ui:shrink-0',
        className,
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='ui:flex ui:justify-center ui:items-center ui:text-current ui:transition-none'>
        <CheckIcon className='ui:size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
