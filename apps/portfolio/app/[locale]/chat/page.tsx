import 'server-only'

import { ChatView } from '@/views/chat-view'

export default function ChatPage({ params }: PageProps<'/[locale]'>) {
  return <ChatView />
}
