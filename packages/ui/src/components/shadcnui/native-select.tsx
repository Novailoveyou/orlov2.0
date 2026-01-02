import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '../../utils/index'

function NativeSelect({
  className,
  size = 'default',
  ...props
}: Omit<React.ComponentProps<'select'>, 'size'> & { size?: 'sm' | 'default' }) {
  return (
    <div
      className='ui:group/native-select ui:relative ui:has-[select:disabled]:opacity-50 ui:w-fit'
      data-slot='native-select-wrapper'>
      <select
        data-slot='native-select'
        data-size={size}
        className={cn(
          'ui:bg-transparent ui:selection:bg-primary ui:dark:bg-input/30 ui:dark:hover:bg-input/50 ui:shadow-xs ui:px-3 ui:data-[size=sm]:py-1 ui:py-2 ui:pr-9 ui:border ui:border-input ui:rounded-md ui:outline-none ui:w-full ui:min-w-0 ui:data-[size=sm]:h-8 ui:h-9 ui:selection:text-primary-foreground ui:placeholder:text-muted-foreground ui:text-sm ui:transition-[color,box-shadow] ui:appearance-none ui:disabled:cursor-not-allowed ui:disabled:pointer-events-none',
          'ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:ring-[3px]',
          'ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive',
          className,
        )}
        {...props}
      />
      <ChevronDownIcon
        className='ui:top-1/2 ui:right-3.5 ui:absolute ui:opacity-50 ui:size-4 ui:text-muted-foreground ui:-translate-y-1/2 ui:pointer-events-none ui:select-none'
        aria-hidden='true'
        data-slot='native-select-icon'
      />
    </div>
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<'option'>) {
  return <option data-slot='native-select-option' {...props} />
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<'optgroup'>) {
  return (
    <optgroup
      data-slot='native-select-optgroup'
      className={cn(className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
