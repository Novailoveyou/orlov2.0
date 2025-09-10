import { ComponentProps } from 'react'

type TimePropsBase = ComponentProps<'time'>

type TimeProps = TimePropsBase & Required<Pick<TimePropsBase, 'dateTime'>>

/**
 * @description A component to display a specific time or date
 * @remarks dateTime format: YYYY-MM-DDThh:mm:ssTZD
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 * @todo add support for `dateTime` as `Date` object
 */
export function Time({ dateTime, children, ...props }: TimeProps) {
  return (
    <time dateTime={dateTime} {...props}>
      {children}
    </time>
  )
}
