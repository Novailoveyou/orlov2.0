import { NAV_MENU_ITEMS } from './constants'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Menu } from '@/shared/components/menu'

export function NavMenuItems(
  props: Omit<ComponentProps<typeof Menu>, 'items'>,
) {
  return <Menu items={NAV_MENU_ITEMS} {...props} />
}

// TODO: add bounce effect
// TODO: add tooltip on hover for each point with slightly deeper description of the menu item
// TODO: add story of showcases and show NEW when there are new showcases added compared to when user visited last time
// TODO: do the same for skills and Story
// TODO: add badge for chat with notification like style there
export const NavMenu = () => {
  return (
    <NavMenuItems
      className={cn(
        'bottom-4 z-50 sticky flex flex-wrap justify-between gap-4 bg-card/20 shadow-[0_4px_35px_0_rgba(0,0,0,0.25)] backdrop-blur-xs mx-auto mt-4 p-4 rounded-3xl max-w-[calc(21.4375rem+2rem)] transition-transform',
      )}
    />
  )
}
