import 'server-only'

import { TermsView } from '@/views/terms-view'

export default function TermsPage({ params }: PageProps<'/[locale]/terms'>) {
  return <TermsView />
}
