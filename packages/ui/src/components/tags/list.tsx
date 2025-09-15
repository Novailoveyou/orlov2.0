import { cn } from '../../utils'
import { ComponentProps } from 'react'

type ListItemProps = ComponentProps<'li'> &
  Required<Pick<ComponentProps<'li'>, 'id'>>

type UlProps = Omit<ComponentProps<'ul'>, 'children'> & {
  items: ListItemProps[]
}

/**
 * @description Ul component to display an unordered list
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
export function Ul({ className, items, ...props }: UlProps) {
  return (
    <ul
      className={cn('ui:mt-6 ui:pl-6 ui:border-l-2 ui:italic', className)}
      {...props}>
      {items.map(({ id, children, className }) => (
        <li key={id} className={cn(className)}>
          {children}
        </li>
      ))}
    </ul>
  )
}
