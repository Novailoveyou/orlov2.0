import * as React from 'react'

import { cn } from '../../utils/index'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'ui:flex ui:bg-transparent ui:dark:bg-input/30 ui:disabled:opacity-50 ui:shadow-xs ui:px-3 ui:py-2 ui:border ui:aria-invalid:border-destructive ui:border-input ui:focus-visible:border-ring ui:rounded-md ui:outline-none ui:aria-invalid:ring-destructive/20 ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:dark:aria-invalid:ring-destructive/40 ui:w-full ui:min-h-16 ui:placeholder:text-muted-foreground ui:md:text-sm ui:text-base ui:transition-[color,box-shadow] ui:field-sizing-content ui:disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
