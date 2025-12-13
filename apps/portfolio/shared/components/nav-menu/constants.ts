import type { Ul } from '@/shared/components/ul'
import { ComponentProps } from 'react'

export const NAV_MENU_ITEMS = [
  {
    id: '1320507d-2538-4472-927f-ffd060217037',
    // portfolio / projects
    children: 'Showcase',
  },
  {
    id: 'f764c4c4-9c0f-41cf-a731-0672fd57fae6',
    children: 'Skills',
  },
  {
    id: '4f847d5e-4992-4181-b5b6-611ad1100b27',
    // expirience
    children: 'Stories',
  },
  {
    id: '72a6db63-ff45-4dd6-ba21-e6b8ffa050c2',
    children: 'Chat',
  },
] as const satisfies ComponentProps<typeof Ul>['items']
