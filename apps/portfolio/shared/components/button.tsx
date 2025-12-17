'use client'
import 'client-only'
import { Button as BaseButton } from '@repo/ui/components/shadcnui/button'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Text } from './text'
import LoadingIcons from 'react-loading-icons'
import { MdErrorOutline } from 'react-icons/md'
import { Icon } from '@/shared/components/icon'

export const i18n = {
  loading: 'Loading...',
  error: 'Error',
}

export const Button = ({
  children,
  className,
  isLoading,
  error,
  ...props
}: ComponentProps<typeof BaseButton>) => (
  <BaseButton
    className={cn(
      'bg-linear-[var(--gradient-primary)] px-4 py-[1.375rem] rounded-4xl w-full text-white',
      className,
    )}
    isLoading={isLoading}
    error={error}
    {...props}>
    <Text className='font-bold text-xl uppercase leading-[100%]'>
      {children}
    </Text>
    {isLoading && (
      <Icon
        Icon={LoadingIcons.Bars}
        aria-label={i18n.loading}
        width='w-5'
        height='h-5'
      />
    )}
    {!!error && !isLoading && (
      <Icon
        Icon={MdErrorOutline}
        aria-label={i18n.error}
        width='w-5'
        height='h-5'
      />
    )}
  </BaseButton>
)
