import { redirect } from 'next/navigation'
import { routing } from './_/i18n/routing'

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`)
}
