import { ComponentProps, FC } from 'react'
import { cn } from '../../utils'

type BaseMenuItemProps = ComponentProps<'li'>

type MenuItemProps = Omit<BaseMenuItemProps, 'children'> &
  Required<Pick<ComponentProps<'li'>, 'id'>> & {
    children: BaseMenuItemProps['children'] | FC
  }

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
      {items.map(({ id, children: Children, className }) => (
        <li key={id} className={cn(className)}>
          {typeof Children === 'function' ? <Children /> : Children}
        </li>
      ))}
    </menu>
  )
}
