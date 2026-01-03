import 'server-only'

import { PrivacyView } from '@/views/privacy-view'

export default function PrivacyPage({
  params,
}: PageProps<'/[locale]/privacy'>) {
  return <PrivacyView />
}
