'use client'
import 'client-only'
import { Button as BaseButton } from '@repo/ui/components/shadcnui/button'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'

export const PrimaryButton = ({
  children,
  className,
  isLoading = false,
  error = false,
  ...props
}: ComponentProps<typeof BaseButton>) => (
  // TODO: apply styles from Text (font-poppins) using textVariant
  <BaseButton
    className={cn(
      'bg-linear-[var(--gradient-primary)] px-4 py-[1.375rem] rounded-4xl w-full font-poppins font-bold text-white text-xl uppercase leading-[100%]',
      className,
    )}
    isLoading={isLoading}
    error={error}
    {...props}>
    {children}
  </BaseButton>
)
