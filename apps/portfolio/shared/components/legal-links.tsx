import { Ul } from '@/shared/components/ul'
import { ComponentProps } from 'react'

const LEGAL_LINKS = [
  {
    id: '84c1f688-c1bf-4387-9ecd-afc3ba5f2a36',
    children: 'Terms',
  },
  {
    id: 'df80959d-ec3b-4df4-b87a-58fbd785201b',
    children: 'Privacy',
  },
] as const satisfies ComponentProps<typeof Ul>['items']

export function LegalLinks() {
  return <Ul items={LEGAL_LINKS} />
}
