import { cn } from '../../utils'
import { ComponentProps, FC } from 'react'

type BaseListItemProps = ComponentProps<'li'>

type ListItemProps = Omit<BaseListItemProps, 'children'> &
  Required<Pick<BaseListItemProps, 'id'>> & {
    children: BaseListItemProps['children'] | FC
  }

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
      {items.map(({ id, children: Children, className }) => (
        <li key={id} className={cn(className)}>
          {typeof Children === 'function' ? <Children /> : Children}
        </li>
      ))}
    </ul>
  )
}
