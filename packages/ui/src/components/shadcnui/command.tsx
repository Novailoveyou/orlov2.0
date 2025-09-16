'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import { cn } from '../../utils/index'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog'

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot='command'
      className={cn(
        'ui:flex ui:flex-col ui:bg-popover ui:rounded-md ui:w-full ui:h-full ui:overflow-hidden ui:text-popover-foreground',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className='ui:sr-only'>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('ui:p-0 ui:overflow-hidden', className)}
        showCloseButton={showCloseButton}>
        <Command className='ui:[&_[cmdk-group-heading]]:text-muted-foreground ui:**:data-[slot=command-input-wrapper]:h-12 ui:[&_[cmdk-group-heading]]:px-2 ui:[&_[cmdk-group-heading]]:font-medium ui:[&_[cmdk-group]]:px-2 ui:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 ui:[&_[cmdk-input-wrapper]_svg]:h-5 ui:[&_[cmdk-input-wrapper]_svg]:w-5 ui:[&_[cmdk-input]]:h-12 ui:[&_[cmdk-item]]:px-2 ui:[&_[cmdk-item]]:py-3 ui:[&_[cmdk-item]_svg]:h-5 ui:[&_[cmdk-item]_svg]:w-5'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot='command-input-wrapper'
      className='ui:flex ui:items-center ui:gap-2 ui:px-3 ui:border-b ui:h-9'>
      <SearchIcon className='ui:opacity-50 ui:size-4 ui:shrink-0' />
      <CommandPrimitive.Input
        data-slot='command-input'
        className={cn(
          'ui:flex ui:bg-transparent ui:disabled:opacity-50 ui:py-3 ui:rounded-md ui:outline-hidden ui:w-full ui:h-10 ui:placeholder:text-muted-foreground ui:text-sm ui:disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot='command-list'
      className={cn(
        'ui:max-h-[300px] ui:overflow-x-hidden ui:overflow-y-auto ui:scroll-py-1',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot='command-empty'
      className='ui:py-6 ui:text-sm ui:text-center'
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot='command-group'
      className={cn(
        'ui:p-1 ui:[&_[cmdk-group-heading]]:px-2 ui:[&_[cmdk-group-heading]]:py-1.5 ui:overflow-hidden ui:[&_[cmdk-group-heading]]:font-medium ui:[&_[cmdk-group-heading]]:text-muted-foreground ui:text-foreground ui:[&_[cmdk-group-heading]]:text-xs',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot='command-separator'
      className={cn('ui:-mx-1 ui:bg-border ui:h-px', className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot='command-item'
      className={cn(
        'ui:data-[selected=true]:bg-accent ui:data-[selected=true]:text-accent-foreground ui:[&_svg:not([class*=text-])]:text-muted-foreground ui:relative ui:flex ui:cursor-default ui:items-center ui:gap-2 ui:rounded-sm ui:px-2 ui:py-1.5 ui:text-sm ui:outline-hidden ui:select-none ui:data-[disabled=true]:pointer-events-none ui:data-[disabled=true]:opacity-50 ui:[&_svg]:pointer-events-none ui:[&_svg]:shrink-0 ui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='command-shortcut'
      className={cn(
        'ui:ml-auto ui:text-muted-foreground ui:text-xs ui:tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
