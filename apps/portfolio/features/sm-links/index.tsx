import 'server-only'

import { ComponentProps } from 'react'
import { Ul } from '@/shared/components/ul'
import { GithubExternalLink } from './github-link'
import { LinkedInExternalLink } from './linkedin-link'
import { EmailExternalLink } from './email-link'
// import { MoreLink } from './more-link'

export const SM_LINKS = [
  {
    id: '80c64ebe-81de-415b-8796-aab6a07ace03',
    children: GithubExternalLink,
  },
  {
    id: 'fd5153ef-f4f7-4f4a-b5fb-2455bf77bda4',
    children: LinkedInExternalLink,
  },
  {
    id: '9f95007c-1b09-439e-94b8-f81af10572a9',
    children: EmailExternalLink,
  },
  // {
  //   id: '932188a1-39dd-45a8-b4ac-9109c0594b83',
  //   children: MoreLink,
  // },
] as const satisfies ComponentProps<typeof Ul>['items']

export function SMLinks() {
  return <Ul items={SM_LINKS} className='text-sm' />
}
