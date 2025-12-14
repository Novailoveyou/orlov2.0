import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/index'

const buttonVariants = cva(
  'ui:inline-flex ui:justify-center ui:items-center ui:gap-2 ui:disabled:opacity-50 ui:aria-invalid:border-destructive ui:focus-visible:border-ring ui:rounded-md ui:outline-none ui:aria-invalid:ring-destructive/20 ui:focus-visible:ring-[3px] ui:focus-visible:ring-ring/50 ui:dark:aria-invalid:ring-destructive/40 ui:font-medium ui:text-sm ui:transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,transform,translate,scale,rotate] ui:whitespace-nowrap ui:motion-reduce:hover:transform-none ui:hover:scale-[1.02] ui:active:scale-[0.98] ui:motion-reduce:transition-none ui:duration-300 ease-out ui:cursor-pointer ui:[&_svg]:pointer-events-none ui:shrink-0',
  {
    variants: {
      variant: {
        default: 'ui:bg-primary ui:text-primary-foreground ui:shadow-xs',
        destructive:
          'ui:bg-destructive ui:text-white ui:shadow-xs  ui:focus-visible:ring-destructive/20 ui:dark:focus-visible:ring-destructive/40 ui:dark:bg-destructive/60',
        outline:
          'ui:border ui:bg-background ui:shadow-xs ui:dark:bg-input/30 ui:dark:border-input',
        secondary: 'ui:bg-secondary ui:text-secondary-foreground ui:shadow-xs',
        ghost: '',
        link: 'ui:text-primary ui:underline-offset-4 ui:hover:underline',
      },
      size: {
        default: 'ui:px-4 ui:py-2',
        sm: 'ui:rounded-md ui:gap-1.5 ui:px-3',
        lg: 'ui:rounded-md ui:px-6',
        icon: 'ui:size-9',
      },
      isLoading: {
        false: '',
        true: 'ui:cursor-progress ui:hover:scale-100 ui:active:scale-100',
      },
      error: {
        false: '',
        true: 'ui:bg-destructive ui:[&&]:bg-linear-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      isLoading: false,
      error: false,
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled,
  onClick,
  onChange,
  isLoading,
  error,
  ...props
}: React.ComponentProps<'button'> &
  Omit<VariantProps<typeof buttonVariants>, 'error'> & {
    asChild?: boolean
    error?: unknown
  }) {
  const Comp = asChild ? Slot : 'button'

  const isDisabled = disabled || !!isLoading

  return (
    <Comp
      data-slot='button'
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      onChange={isDisabled ? undefined : onChange}
      className={cn(
        buttonVariants({ variant, size, isLoading, error: !!error, className }),
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
