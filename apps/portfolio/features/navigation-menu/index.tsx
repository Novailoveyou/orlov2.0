import 'server-only'

import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Menu } from '@/shared/components/menu'
import { PortfolioNavigationMenuItem } from './portfolio-navigation-menu-item'
import { SkillsNavigationMenuItem } from './skills-navigation-menu-item'
import { StoriesMenuItem } from './stories-navigation-menu-item'
import { ChatMenuItem } from './chat-navigation-menu-item'

const NAVIGATION_MENU_ITEMS = [
  {
    id: '1320507d-2538-4472-927f-ffd060217037',
    // portfolio / projects
    children: PortfolioNavigationMenuItem,
  },
  {
    id: 'f764c4c4-9c0f-41cf-a731-0672fd57fae6',
    children: SkillsNavigationMenuItem,
  },
  {
    id: '4f847d5e-4992-4181-b5b6-611ad1100b27',
    // expirience
    children: StoriesMenuItem,
  },
  {
    id: '72a6db63-ff45-4dd6-ba21-e6b8ffa050c2',
    children: ChatMenuItem,
  },
] as const satisfies ComponentProps<typeof Menu>['items']

// TODO: add bounce effect
// TODO: add tooltip on hover for each point with slightly deeper description of the menu item
// TODO: add story of showcases and show NEW when there are new showcases added compared to when user visited last time
// TODO: do the same for skills and Story
// TODO: add badge for chat with notification like style there
export const NavigationMenu = () => {
  return (
    <Menu
      items={NAVIGATION_MENU_ITEMS}
      className={cn(
        'bottom-4 z-50 sticky flex flex-wrap justify-between gap-4 bg-card/35 shadow-[0_4px_35px_0_rgba(0,0,0,0.25)] backdrop-blur-xs mx-auto mt-4 px-4 py-[0.875rem] rounded-4xl max-w-[calc(21.4375rem+2rem)] transition-transform',
      )}
    />
  )
}
