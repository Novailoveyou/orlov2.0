import 'server-only'

import { SkillsView } from '@/views/skills-view'

export default function SkillsPage({ params }: PageProps<'/'>) {
  return <SkillsView />
}
