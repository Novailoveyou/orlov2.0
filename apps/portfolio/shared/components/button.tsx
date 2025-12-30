'use client'
import 'client-only'
import { Button as BaseButton } from '@repo/ui/components/shadcnui/button'
import { ComponentProps } from 'react'
import LoadingIcons from 'react-loading-icons'
import { MdErrorOutline } from 'react-icons/md'
import { cn } from '@/shared/utils'
import { Icon } from '@/shared/components/icon'
import { Text } from '@/shared/components/text'

export const Button = ({
  children,
  className,
  isLoading,
  error,
  loadingMessage,
  errorMessage,
  ...props
}: ComponentProps<typeof BaseButton> & {
  loadingMessage?: string
  errorMessage?: string
}) => (
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
        aria-label={loadingMessage!}
        width='w-5'
        height='h-5'
      />
    )}
    {!!error && !isLoading && (
      <Icon
        Icon={MdErrorOutline}
        aria-label={errorMessage!}
        width='w-5'
        height='h-5'
      />
    )}
  </BaseButton>
)
