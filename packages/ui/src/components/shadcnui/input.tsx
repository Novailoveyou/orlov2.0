import * as React from 'react'

import { cn } from '@/utils/index'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'ui:file:inline-flex ui:flex ui:bg-transparent ui:selection:bg-primary ui:dark:bg-input/30 ui:file:bg-transparent ui:disabled:opacity-50 ui:shadow-xs ui:px-3 ui:py-1 ui:border ui:border-input ui:file:border-0 ui:rounded-md ui:outline-none ui:w-full ui:min-w-0 ui:file:h-7 ui:h-9 ui:file:font-medium ui:selection:text-primary-foreground ui:placeholder:text-muted-foreground ui:file:text-foreground ui:md:text-sm ui:file:text-sm ui:text-base ui:transition-[color,box-shadow] ui:disabled:cursor-not-allowed ui:disabled:pointer-events-none',
        'ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:ring-[3px]',
        'ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
