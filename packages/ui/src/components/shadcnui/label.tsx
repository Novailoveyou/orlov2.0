import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/utils/index'

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        'ui:flex ui:items-center ui:gap-2 ui:group-data-[disabled=true]:opacity-50 ui:peer-disabled:opacity-50 ui:font-medium ui:text-sm ui:leading-none ui:peer-disabled:cursor-not-allowed ui:group-data-[disabled=true]:pointer-events-none ui:select-none',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
