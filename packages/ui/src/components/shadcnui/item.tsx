import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/index'
import { Separator } from '@/components/shadcnui/separator'

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role='list'
      data-slot='item-group'
      className={cn('ui:group/item-group ui:flex ui:flex-col', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot='item-separator'
      orientation='horizontal'
      className={cn('ui:my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'ui:group/item ui:flex ui:flex-wrap ui:items-center ui:[a]:hover:bg-accent/50 ui:border ui:border-transparent ui:focus-visible:border-ring ui:rounded-md ui:outline-none ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:text-sm ui:[a]:transition-colors ui:transition-colors ui:duration-100',
  {
    variants: {
      variant: {
        default: 'ui:bg-transparent',
        outline: 'ui:border-border',
        muted: 'ui:bg-muted/50',
      },
      size: {
        default: 'ui:p-4 ui:gap-4 ui:',
        sm: 'ui:py-3 ui:px-4 ui:gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot='item'
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'ui:flex ui:justify-center ui:items-center ui:group-has-[[data-slot=item-description]]/item:self-start ui:gap-2 ui:group-has-[[data-slot=item-description]]/item:translate-y-0.5 ui:[&_svg]:pointer-events-none ui:shrink-0',
  {
    variants: {
      variant: {
        default: 'ui:bg-transparent',
        icon: 'ui:size-8 ui:border ui:rounded-sm ui:bg-muted ui:[&_svg:not([class*=size-])]:size-4',
        image:
          'ui:size-10 ui:rounded-sm ui:overflow-hidden ui:[&_img]:size-full ui:[&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot='item-media'
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-content'
      className={cn(
        'ui:flex ui:flex-col ui:[&+[data-slot=item-content]]:flex-none ui:flex-1 ui:gap-1',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-title'
      className={cn(
        'ui:flex ui:items-center ui:gap-2 ui:w-fit ui:font-medium ui:text-sm ui:leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot='item-description'
      className={cn(
        'ui:font-normal ui:text-muted-foreground ui:text-sm ui:line-clamp-2 ui:text-balance ui:leading-normal',
        'ui:[&>a:hover]:text-primary ui:[&>a]:underline ui:[&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-actions'
      className={cn('ui:flex ui:items-center ui:gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-header'
      className={cn(
        'ui:flex ui:justify-between ui:items-center ui:gap-2 ui:basis-full',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='item-footer'
      className={cn(
        'ui:flex ui:justify-between ui:items-center ui:gap-2 ui:basis-full',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
