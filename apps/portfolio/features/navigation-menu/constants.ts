import 'server-only'

import { ComponentProps } from 'react'
import { Menu } from '@/shared/components/menu'
import { PortfolioNavigationMenuItem } from './portfolio-navigation-menu-item'
import { SkillsNavigationMenuItem } from './skills-navigation-menu-item'
import { StoriesMenuItem } from './stories-navigation-menu-item'
import { ChatMenuItem } from './chat-navigation-menu-item'
import { LINKS } from '@/shared/constants'

export const NAVIGATION_MENU_ITEMS = [
  {
    id: LINKS.portfolio,
    // portfolio / projects
    children: PortfolioNavigationMenuItem,
  },
  {
    id: LINKS.skills,
    children: SkillsNavigationMenuItem,
  },
  {
    id: LINKS.stories,
    // expirience
    children: StoriesMenuItem,
  },
  {
    id: LINKS.chat,
    children: ChatMenuItem,
  },
] as const satisfies ComponentProps<typeof Menu>['items']
