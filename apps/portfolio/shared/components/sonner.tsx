'use client'
import 'client-only'

import {
  Toaster as ToasterBase,
  toast,
} from '@repo/ui/components/shadcnui/sonner'
import { useTheme } from 'next-themes'

export const Toaster = () => {
  const { theme = 'system' } = useTheme()
  return <ToasterBase theme={theme} />
}

export { toast }
