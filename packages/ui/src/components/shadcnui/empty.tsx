import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/index'

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty'
      className={cn(
        'ui:flex ui:flex-col ui:flex-1 ui:justify-center ui:items-center ui:gap-6 ui:md:p-12 ui:p-6 ui:border-dashed ui:rounded-lg ui:min-w-0 ui:text-center ui:text-balance',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty-header'
      className={cn(
        'ui:flex ui:flex-col ui:items-center ui:gap-2 ui:max-w-sm ui:text-center',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'ui:flex ui:justify-center ui:items-center ui:mb-2 ui:[&_svg]:pointer-events-none ui:shrink-0 ui:[&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'ui:bg-transparent',
        icon: 'ui:bg-muted ui:text-foreground ui:flex ui:size-10 ui:shrink-0 ui:items-center ui:justify-center ui:rounded-lg ui:[&_svg:not([class*=size-])]:size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot='empty-icon'
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty-title'
      className={cn('ui:font-medium ui:text-lg ui:tracking-tight', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      data-slot='empty-description'
      className={cn(
        'ui:[&>a:hover]:text-primary ui:text-muted-foreground ui:text-sm/relaxed ui:[&>a]:underline ui:[&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='empty-content'
      className={cn(
        'ui:flex ui:flex-col ui:items-center ui:gap-4 ui:w-full ui:min-w-0 ui:max-w-sm ui:text-sm ui:text-balance',
        className,
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
