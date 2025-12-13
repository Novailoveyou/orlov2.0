import { cn } from '../../utils'
import { ComponentProps } from 'react'

type MenuItemProps = ComponentProps<'li'> &
  Required<Pick<ComponentProps<'li'>, 'id'>>

type MenuProps = Omit<ComponentProps<'menu'>, 'children'> & {
  items: MenuItemProps[]
}

/**
 * @description Menu component to display menu list
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 */
export function Menu({ className, items, ...props }: MenuProps) {
  return (
    <menu className={cn('ui:mt-6 ui:pl-6', className)} {...props}>
      {items.map(({ id, children, className }) => (
        <li key={id} className={cn(className)}>
          {children}
        </li>
      ))}
    </menu>
  )
}
