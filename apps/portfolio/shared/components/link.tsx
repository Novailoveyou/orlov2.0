// TODO: figure out server only
'use client'
import 'client-only'

import { Link as LinkBase } from '@repo/ui/components/link'
import { Link as I18NLink } from '@/app/_/i18n/navigation'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export function Link({
  className,
  href,
  children,
  ...props
}: ComponentProps<typeof I18NLink> & ComponentProps<typeof LinkBase>) {
  return (
    <LinkBase href={href} className={cn(className)} {...props} asChild>
      <I18NLink href={href}>{children}</I18NLink>
    </LinkBase>
  )
}
