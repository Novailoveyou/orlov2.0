import { ComponentProps } from 'react'
import type { List } from '@/shared/components/typography/list'

export const SM_LINKS = [
  {
    id: '80c64ebe-81de-415b-8796-aab6a07ace03',
    children: 'github',
  },
  {
    id: 'fd5153ef-f4f7-4f4a-b5fb-2455bf77bda4',
    children: 'linkedin',
  },
  {
    id: '9f95007c-1b09-439e-94b8-f81af10572a9',
    children: 'email',
  },
  {
    id: '932188a1-39dd-45a8-b4ac-9109c0594b83',
    children: 'more',
  },
] as const satisfies ComponentProps<typeof List>['items']
