import { format } from 'date-fns'
import type { ComponentProps } from 'react'

export const Time = ({
  date,
  label,
  ...props
}: Omit<ComponentProps<'time'>, 'dateTime' | 'children'> & {
  date: Date
  label: string
}) => {
  return (
    <time dateTime={date.toISOString()} {...props}>
      {label}: {format(date, 'PPP')}
    </time>
  )
}
