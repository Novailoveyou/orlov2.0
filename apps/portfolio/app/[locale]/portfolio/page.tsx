import 'server-only'

import { PortfolioView } from '@/views/portfolio-view'

export default function PortfolioPage({ params }: PageProps<'/[locale]'>) {
  return <PortfolioView />
}
