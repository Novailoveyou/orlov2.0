import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/utils/index'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('ui:border-b ui:last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='ui:flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'ui:flex ui:flex-1 ui:justify-between ui:items-start ui:gap-4 ui:disabled:opacity-50 ui:py-4 ui:focus-visible:border-ring ui:rounded-md ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:font-medium ui:text-sm ui:text-left ui:hover:underline ui:[&[data-state=open]>svg]:rotate-180 ui:transition-all ui:disabled:pointer-events-none',
          className,
        )}
        {...props}>
        {children}
        <ChevronDownIcon className='ui:size-4 ui:text-muted-foreground ui:transition-transform ui:translate-y-0.5 ui:duration-200 ui:pointer-events-none ui:shrink-0' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='ui:overflow-hidden ui:text-sm ui:data-[state=closed]:animate-accordion-up ui:data-[state=open]:animate-accordion-down'
      {...props}>
      <div className={cn('ui:pt-0 ui:pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
