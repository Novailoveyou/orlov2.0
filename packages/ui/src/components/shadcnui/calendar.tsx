import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/utils/index'
import { Button, buttonVariants } from '@/components/shadcnui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'ui:group/calendar ui:[[data-slot=card-content]_&]:bg-transparent ui:[[data-slot=popover-content]_&]:bg-transparent ui:bg-background ui:p-3 ui:[--cell-size:--spacing(8)]',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: date =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('ui:w-fit', defaultClassNames.root),
        months: cn(
          'ui:relative ui:flex ui:md:flex-row ui:flex-col ui:gap-4',
          defaultClassNames.months,
        ),
        month: cn(
          'ui:flex ui:flex-col ui:gap-4 ui:w-full',
          defaultClassNames.month,
        ),
        nav: cn(
          'ui:top-0 ui:absolute ui:inset-x-0 ui:flex ui:justify-between ui:items-center ui:gap-1 ui:w-full',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'ui:size-(--cell-size) ui:aria-disabled:opacity-50 ui:p-0 ui:select-none',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'ui:size-(--cell-size) ui:aria-disabled:opacity-50 ui:p-0 ui:select-none',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'ui:flex ui:items-center ui:justify-center ui:h-(--cell-size) ui:w-full ui:px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'ui:w-full ui:flex ui:items-center ui:text-sm ui:font-medium ui:justify-center ui:h-(--cell-size) ui:gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'ui:relative ui:shadow-xs ui:border ui:border-input ui:has-focus:border-ring ui:rounded-md ui:has-focus:ring-[3px] ui:has-focus:ring-ring/50',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'ui:absolute ui:inset-0 ui:bg-popover ui:opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'ui:font-medium ui:select-none',
          captionLayout === 'label'
            ? 'ui:text-sm'
            : 'ui:rounded-md ui:pl-2 ui:pr-1 ui:flex ui:items-center ui:gap-1 ui:text-sm ui:h-8 ui:[&>svg]:text-muted-foreground ui:[&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'ui:w-full ui:border-collapse',
        weekdays: cn('ui:flex', defaultClassNames.weekdays),
        weekday: cn(
          'ui:flex-1 ui:rounded-md ui:font-normal ui:text-[0.8rem] ui:text-muted-foreground ui:select-none',
          defaultClassNames.weekday,
        ),
        week: cn('ui:flex ui:mt-2 ui:w-full', defaultClassNames.week),
        week_number_header: cn(
          'ui:select-none ui:w-(--cell-size)',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'ui:text-[0.8rem] ui:text-muted-foreground ui:select-none',
          defaultClassNames.week_number,
        ),
        day: cn(
          'ui:group/day ui:relative ui:p-0 ui:[&:last-child[data-selected=true]_button]:rounded-r-md ui:[&:first-child[data-selected=true]_button]:rounded-l-md ui:w-full ui:h-full ui:aspect-square ui:text-center ui:select-none',
          defaultClassNames.day,
        ),
        range_start: cn(
          'ui:bg-accent ui:rounded-l-md',
          defaultClassNames.range_start,
        ),
        range_middle: cn('ui:rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'ui:bg-accent ui:rounded-r-md',
          defaultClassNames.range_end,
        ),
        today: cn(
          'ui:bg-accent ui:data-[selected=true]:rounded-none ui:rounded-md ui:text-accent-foreground',
          defaultClassNames.today,
        ),
        outside: cn(
          'ui:aria-selected:text-muted-foreground ui:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'ui:opacity-50 ui:text-muted-foreground',
          defaultClassNames.disabled,
        ),
        hidden: cn('ui:invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot='calendar'
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon
                className={cn('ui:size-4', className)}
                {...props}
              />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={cn('ui:size-4', className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon
              className={cn('ui:size-4', className)}
              {...props}
            />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className='ui:flex ui:size-(--cell-size) ui:items-center ui:justify-center ui:text-center'>
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant='ghost'
      size='icon'
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'ui:data-[selected-single=true]:bg-primary ui:data-[selected-single=true]:text-primary-foreground ui:data-[range-middle=true]:bg-accent ui:data-[range-middle=true]:text-accent-foreground ui:data-[range-start=true]:bg-primary ui:data-[range-start=true]:text-primary-foreground ui:data-[range-end=true]:bg-primary ui:data-[range-end=true]:text-primary-foreground ui:group-data-[focused=true]/day:border-ring ui:group-data-[focused=true]/day:ring-ring/50 ui:dark:hover:text-accent-foreground ui:flex ui:aspect-square ui:size-auto ui:w-full ui:min-w-(--cell-size) ui:flex-col ui:gap-1 ui:leading-none ui:font-normal ui:group-data-[focused=true]/day:relative ui:group-data-[focused=true]/day:z-10 ui:group-data-[focused=true]/day:ring-[3px] ui:data-[range-end=true]:rounded-md ui:data-[range-end=true]:rounded-r-md ui:data-[range-middle=true]:rounded-none ui:data-[range-start=true]:rounded-md ui:data-[range-start=true]:rounded-l-md ui:[&>span]:text-xs ui:[&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
