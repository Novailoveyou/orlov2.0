'use client'
import 'client-only'

import { cn } from '@/shared/utils'
import { Link } from '@/shared/components/link'
import { ComponentProps } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

export const NavigationLink = ({
  href,
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) => {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className={cn(
        'flex flex-col justify-center items-center gap-1 px-1',
        isActive && 'font-bold [&>span]:font-bold',
        className,
      )}
      {...props}>
      {children}
    </Link>
  )
}
