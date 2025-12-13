'use client'
import 'client-only'
import { Button as BaseButton } from '@repo/ui/components/shadcnui/button'
import { ComponentProps } from 'react'
import { Span } from '@repo/ui/components/tags/span'
import { cn } from '@/shared/utils'

export const Button = ({
  children,
  className,
  ...props
}: ComponentProps<typeof BaseButton>) => (
  <BaseButton className={cn('bg-[#FF00D6] text-white', className)} {...props}>
    <Span className=''>{children}</Span>
  </BaseButton>
)
