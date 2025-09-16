import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '../../utils/index'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot='navigation-menu'
      data-viewport={viewport}
      className={cn(
        'ui:group/navigation-menu ui:relative ui:flex ui:flex-1 ui:justify-center ui:items-center ui:max-w-max',
        className,
      )}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot='navigation-menu-list'
      className={cn(
        'ui:group ui:flex ui:flex-1 ui:justify-center ui:items-center ui:gap-1 ui:list-none',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot='navigation-menu-item'
      className={cn('ui:relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'ui:group ui:inline-flex ui:justify-center ui:items-center ui:bg-background ui:data-[state=open]:bg-accent/50 ui:data-[state=open]:hover:bg-accent ui:data-[state=open]:focus:bg-accent ui:hover:bg-accent ui:focus:bg-accent ui:disabled:opacity-50 ui:px-4 ui:py-2 ui:rounded-md ui:focus-visible:outline-1 ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:w-max ui:h-9 ui:font-medium ui:text-sm ui:transition-[color,box-shadow] ui:data-[state=open]:text-accent-foreground ui:hover:text-accent-foreground ui:focus:text-accent-foreground ui:disabled:pointer-events-none',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      className={cn(navigationMenuTriggerStyle(), 'ui:group', className)}
      {...props}>
      {children}{' '}
      <ChevronDownIcon
        className='ui:top-[1px] ui:relative ui:ml-1 ui:size-3 ui:group-data-[state=open]:rotate-180 ui:transition ui:duration-300'
        aria-hidden='true'
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot='navigation-menu-content'
      className={cn(
        'ui:top-0 ui:data-[motion=from-end]:slide-in-from-right-52 ui:data-[motion=to-end]:slide-out-to-right-52 ui:data-[motion=to-start]:slide-out-to-left-52 ui:left-0 ui:md:absolute ui:data-[motion=from-start]:slide-in-from-left-52 ui:p-2 ui:pr-2.5 ui:md:w-auto ui:w-full ui:data-[motion^=from-]:animate-in ui:data-[motion^=to-]:animate-out ui:data-[motion^=from-]:fade-in ui:data-[motion^=to-]:fade-out',
        'ui:group-data-[viewport=false]/navigation-menu:bg-popover ui:group-data-[viewport=false]/navigation-menu:text-popover-foreground ui:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in ui:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out ui:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 ui:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 ui:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 ui:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 ui:group-data-[viewport=false]/navigation-menu:top-full ui:group-data-[viewport=false]/navigation-menu:mt-1.5 ui:group-data-[viewport=false]/navigation-menu:overflow-hidden ui:group-data-[viewport=false]/navigation-menu:rounded-md ui:group-data-[viewport=false]/navigation-menu:border ui:group-data-[viewport=false]/navigation-menu:shadow ui:group-data-[viewport=false]/navigation-menu:duration-200 ui:**:data-[slot=navigation-menu-link]:focus:ring-0 ui:**:data-[slot=navigation-menu-link]:focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        'ui:top-full ui:left-0 ui:z-50 ui:isolate ui:absolute ui:flex ui:justify-center',
      )}>
      <NavigationMenuPrimitive.Viewport
        data-slot='navigation-menu-viewport'
        className={cn(
          'ui:relative ui:bg-popover ui:shadow ui:mt-1.5 ui:border ui:rounded-md ui:md:w-[var(--radix-navigation-menu-viewport-width)] ui:w-full ui:h-[var(--radix-navigation-menu-viewport-height)] ui:overflow-hidden ui:text-popover-foreground ui:origin-top-center ui:data-[state=closed]:animate-out ui:data-[state=open]:animate-in ui:data-[state=closed]:zoom-out-95 ui:data-[state=open]:zoom-in-90',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot='navigation-menu-link'
      className={cn(
        'ui:data-[active=true]:focus:bg-accent ui:data-[active=true]:hover:bg-accent ui:data-[active=true]:bg-accent/50 ui:data-[active=true]:text-accent-foreground ui:hover:bg-accent ui:hover:text-accent-foreground ui:focus:bg-accent ui:focus:text-accent-foreground ui:focus-visible:ring-ring/50 ui:[&_svg:not([class*=text-])]:text-muted-foreground ui:flex ui:flex-col ui:gap-1 ui:rounded-sm ui:p-2 ui:text-sm ui:transition-all ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:outline-1 ui:[&_svg:not([class*=size-])]:size-4',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot='navigation-menu-indicator'
      className={cn(
        'ui:top-full ui:z-[1] ui:flex ui:justify-center ui:items-end ui:h-1.5 ui:overflow-hidden ui:data-[state=hidden]:animate-out ui:data-[state=visible]:animate-in ui:data-[state=hidden]:fade-out ui:data-[state=visible]:fade-in',
        className,
      )}
      {...props}>
      <div className='ui:top-[60%] ui:relative ui:shadow-md ui:bg-border ui:rounded-tl-sm ui:w-2 ui:h-2 ui:rotate-45' />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
