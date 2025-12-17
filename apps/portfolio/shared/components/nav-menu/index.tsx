import 'server-only'

import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Menu } from '@/shared/components/menu'
import {
  RiGalleryLine,
  RiCodeSSlashLine,
  RiBookLine,
  RiChat3Line,
} from 'react-icons/ri'
import { Text } from '@/shared/components/text'
import { Icon } from '@/shared/components/icon'
import { Link } from '@/shared/components/link'
import { NavLink } from './nav-link'
import { LINKS } from '@/shared/constants'

const i18n = {
  loading: 'Loading...',
  portfolio: 'Portfolio',
  skills: 'Skills',
  stories: 'Stories',
  chat: 'Chat',
}

const NavMenuItem = ({
  href,
  children,
  className,
  Icon: IconProp,
  'aria-label': ariaLabel,
  ...props
}: ComponentProps<typeof Link> &
  Pick<ComponentProps<typeof Icon>, 'Icon' | 'aria-label'>) => {
  return (
    <NavLink href={href} className={className} {...props}>
      <Icon Icon={IconProp} width='w-5' height='h-5' aria-label={ariaLabel} />
      <Text className='font-normal text-xs uppercase leading-[100%]'>
        {children}
      </Text>
    </NavLink>
  )
}

const NAV_MENU_ITEMS = [
  {
    id: '1320507d-2538-4472-927f-ffd060217037',
    // portfolio / projects
    children: (
      <NavMenuItem
        href={LINKS.portfolio}
        pending={i18n.loading}
        Icon={RiGalleryLine}
        aria-label={i18n.portfolio}>
        {i18n.portfolio}
      </NavMenuItem>
    ),
  },
  {
    id: 'f764c4c4-9c0f-41cf-a731-0672fd57fae6',
    children: (
      <NavMenuItem
        href={LINKS.skills}
        pending={i18n.loading}
        Icon={RiCodeSSlashLine}
        aria-label={i18n.skills}>
        {i18n.skills}
      </NavMenuItem>
    ),
  },
  {
    id: '4f847d5e-4992-4181-b5b6-611ad1100b27',
    // expirience
    children: (
      <NavMenuItem
        href={LINKS.stories}
        pending={i18n.loading}
        Icon={RiBookLine}
        aria-label={i18n.stories}>
        {i18n.stories}
      </NavMenuItem>
    ),
  },
  {
    id: '72a6db63-ff45-4dd6-ba21-e6b8ffa050c2',
    children: (
      <NavMenuItem
        href={LINKS.chat}
        pending={i18n.loading}
        Icon={RiChat3Line}
        aria-label={i18n.chat}>
        {i18n.chat}
      </NavMenuItem>
    ),
  },
] as const satisfies ComponentProps<typeof Menu>['items']

// TODO: add bounce effect
// TODO: add tooltip on hover for each point with slightly deeper description of the menu item
// TODO: add story of showcases and show NEW when there are new showcases added compared to when user visited last time
// TODO: do the same for skills and Story
// TODO: add badge for chat with notification like style there
export const NavMenu = () => {
  return (
    <Menu
      items={NAV_MENU_ITEMS}
      className={cn(
        'bottom-4 z-50 sticky flex flex-wrap justify-between gap-4 bg-card/35 shadow-[0_4px_35px_0_rgba(0,0,0,0.25)] backdrop-blur-xs mx-auto mt-4 px-4 py-[0.875rem] rounded-4xl max-w-[calc(21.4375rem+2rem)] transition-transform',
      )}
    />
  )
}
