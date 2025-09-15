import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/utils/index'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('ui:gap-3 ui:grid', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'ui:dark:bg-input/30 ui:disabled:opacity-50 ui:shadow-xs ui:border ui:aria-invalid:border-destructive ui:border-input ui:focus-visible:border-ring ui:rounded-full ui:outline-none ui:aria-invalid:ring-destructive/20 ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:dark:aria-invalid:ring-destructive/40 ui:size-4 ui:aspect-square ui:text-primary ui:transition-[color,box-shadow] ui:disabled:cursor-not-allowed ui:shrink-0',
        className,
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='ui:relative ui:flex ui:justify-center ui:items-center'>
        <CircleIcon className='ui:top-1/2 ui:left-1/2 ui:absolute ui:fill-primary ui:size-2 ui:-translate-x-1/2 ui:-translate-y-1/2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
