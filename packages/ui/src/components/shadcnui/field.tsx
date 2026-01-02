import { useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/index'
import { Label } from '../../components/shadcnui/label'
import { Separator } from '../../components/shadcnui/separator'

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot='field-set'
      className={cn(
        'ui:flex ui:flex-col ui:gap-6',
        'ui:has-[>[data-slot=checkbox-group]]:gap-3 ui:has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot='field-legend'
      data-variant={variant}
      className={cn(
        'ui:mb-3 ui:font-medium',
        'ui:data-[variant=legend]:text-base',
        'ui:data-[variant=label]:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='field-group'
      className={cn(
        'ui:@container/field-group ui:group/field-group ui:flex ui:flex-col ui:[&>[data-slot=field-group]]:gap-4 ui:data-[slot=checkbox-group]:gap-3 ui:gap-7 ui:w-full',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'ui:group/field ui:flex ui:gap-3 ui:w-full ui:data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role='group'
      data-slot='field'
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='field-content'
      className={cn(
        'ui:group/field-content ui:flex ui:flex-col ui:flex-1 ui:gap-1.5 ui:leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot='field-label'
      className={cn(
        'ui:group/field-label ui:peer/field-label ui:flex ui:gap-2 ui:group-data-[disabled=true]/field:opacity-50 ui:w-fit ui:leading-snug',
        'ui:has-[>[data-slot=field]]:w-full ui:has-[>[data-slot=field]]:flex-col ui:has-[>[data-slot=field]]:rounded-md ui:has-[>[data-slot=field]]:border ui:[&>*]:data-[slot=field]:p-4',
        'ui:has-data-[state=checked]:bg-primary/5 ui:has-data-[state=checked]:border-primary ui:dark:has-data-[state=checked]:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='field-label'
      className={cn(
        'ui:flex ui:items-center ui:gap-2 ui:group-data-[disabled=true]/field:opacity-50 ui:w-fit ui:font-medium ui:text-sm ui:leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot='field-description'
      className={cn(
        'ui:font-normal ui:text-muted-foreground ui:text-sm ui:group-has-[[data-orientation=horizontal]]/field:text-balance ui:leading-normal',
        'ui:last:mt-0 ui:nth-last-2:-mt-1 ui:[[data-variant=legend]+&]:-mt-1.5',
        'ui:[&>a:hover]:text-primary ui:[&>a]:underline ui:[&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot='field-separator'
      data-content={!!children}
      className={cn(
        'ui:relative ui:-my-2 ui:group-data-[variant=outline]/field-group:-mb-2 ui:h-5 ui:text-sm',
        className,
      )}
      {...props}>
      <Separator className='ui:top-1/2 ui:absolute ui:inset-0' />
      {children && (
        <span
          className='ui:block ui:relative ui:bg-background ui:mx-auto ui:px-2 ui:w-fit ui:text-muted-foreground'
          data-slot='field-separator-content'>
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    const uniqueErrors = [
      ...new Map(errors.map(error => [error?.message, error])).values(),
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
    }

    return (
      <ul className='ui:flex ui:flex-col ui:gap-1 ui:ml-4 ui:list-disc'>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role='alert'
      data-slot='field-error'
      className={cn('ui:font-normal ui:text-destructive ui:text-sm', className)}
      {...props}>
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
