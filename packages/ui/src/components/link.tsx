'use client'
import 'client-only'

import NextLink, { useLinkStatus } from 'next/link'
import { cn } from '../utils'
import { ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'

type ImageProps = ComponentProps<typeof NextLink> & {
  pending: string
  asChild?: boolean
}

/**
 * @description Link component to display link component
 * @see https://nextjs.org/docs/api-reference/next/link
 */
export const Link = ({
  pending: pendingProp = 'Loading...',
  href,
  as,
  replace = false,
  scroll = true,
  shallow = false,
  passHref = false,
  prefetch = true,
  locale,
  onMouseEnter,
  onTouchStart,
  onClick,
  onNavigate,
  className,
  children,
  'aria-label': ariaLabel,
  asChild = false,
  ...props
}: ImageProps) => {
  const Comp = asChild ? Slot : NextLink

  const { pending } = useLinkStatus()

  return (
    <Comp
      data-slot='link'
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={locale ? false : prefetch}
      locale={locale}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      onClick={onClick}
      onNavigate={onNavigate}
      className={cn(
        'ui:cursor-pointer',
        pending && 'ui:cursor-progress ui:opacity-50',
        className,
      )}
      aria-label={pending ? pendingProp : ariaLabel}
      {...props}>
      {children}
    </Comp>
  )
}
