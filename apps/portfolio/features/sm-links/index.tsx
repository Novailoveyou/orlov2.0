import 'server-only'

import { ComponentProps } from 'react'
import { Ul } from '@/shared/components/ul'

export const i18n = {
  github: 'github',
  linkedin: 'linkedin',
  email: 'email',
  more: 'more',
}

export const SM_LINKS = [
  {
    id: '80c64ebe-81de-415b-8796-aab6a07ace03',
    children: i18n.github,
  },
  {
    id: 'fd5153ef-f4f7-4f4a-b5fb-2455bf77bda4',
    children: i18n.linkedin,
  },
  {
    id: '9f95007c-1b09-439e-94b8-f81af10572a9',
    children: i18n.email,
  },
  {
    id: '932188a1-39dd-45a8-b4ac-9109c0594b83',
    children: i18n.more,
  },
] as const satisfies ComponentProps<typeof Ul>['items']

export function SMLinks() {
  return <Ul items={SM_LINKS} />
}
