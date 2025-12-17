import 'server-only'

import { Ul } from '@/shared/components/ul'
import { ComponentProps } from 'react'

export const i18n = {
  terms: 'Terms',
  privacy: 'Privacy',
}

const LEGAL_LINKS = [
  {
    id: '84c1f688-c1bf-4387-9ecd-afc3ba5f2a36',
    children: i18n.terms,
  },
  {
    id: 'df80959d-ec3b-4df4-b87a-58fbd785201b',
    children: i18n.privacy,
  },
] as const satisfies ComponentProps<typeof Ul>['items']

export function LegalLinks() {
  return <Ul items={LEGAL_LINKS} />
}
