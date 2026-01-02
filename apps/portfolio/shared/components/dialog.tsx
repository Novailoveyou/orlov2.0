'use client'
import 'client-only'

import { useRouter } from '@/app/_/i18n/navigation'
import { Dialog as DialogBase } from '@repo/ui/components/dialog'

export function Dialog({
  onOpenChange: onOpenChangeProp,
  ...props
}: React.ComponentProps<typeof DialogBase>) {
  const router = useRouter()

  const onOpenChange: typeof onOpenChangeProp = open => {
    if (!open) {
      router.back()
    }
    return onOpenChangeProp?.(open)
  }
  return <DialogBase onOpenChange={onOpenChange} {...props} />
}
