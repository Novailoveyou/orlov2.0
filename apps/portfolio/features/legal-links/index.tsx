import 'server-only'

import { ComponentProps } from 'react'
import { Ul } from '@/shared/components/ul'
import { TermsOfService } from './terms-of-service-link'
import { PrivacyPolicy } from './privacy-policy-link'

const LEGAL_LINKS = [
  {
    id: 'df80959d-ec3b-4df4-b87a-58fbd785201b',
    children: PrivacyPolicy,
  },
  {
    id: '84c1f688-c1bf-4387-9ecd-afc3ba5f2a36',
    children: TermsOfService,
  },
] as const satisfies ComponentProps<typeof Ul>['items']

export function LegalLinks() {
  return <Ul items={LEGAL_LINKS} className='text-sm' />
}
