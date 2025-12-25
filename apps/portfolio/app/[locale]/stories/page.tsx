import 'server-only'

import { StoriesView } from '@/views/stories-view'

export default function StoriesPage({ params }: PageProps<'/[locale]'>) {
  return <StoriesView />
}
