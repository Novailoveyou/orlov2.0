import 'server-only'

import { cn } from '@/shared/utils'
import { Menu } from '@/shared/components/menu'
import { NAVIGATION_MENU_ITEMS } from './constants'

// TODO: add bounce effect
// TODO: add tooltip on hover for each point with slightly deeper description of the menu item
// TODO: add story of showcases and show NEW when there are new showcases added compared to when user visited last time
// TODO: do the same for skills and Story
// TODO: add badge for chat with notification like style there
export const NavigationMenu = () => {
  return (
    <Menu
      items={NAVIGATION_MENU_ITEMS}
      role='navigation'
      className={cn(
        'bottom-4 z-50 sticky flex flex-wrap justify-between gap-6 bg-card/35 shadow-[0_4px_35px_0_rgba(0,0,0,0.25)] backdrop-blur-xs mx-auto mt-4 px-4 py-[0.875rem] rounded-4xl w-full max-w-[calc(21.4375rem+2rem)] transition-transform',
      )}
    />
  )
}
