'use client'
import 'client-only'

import { cn } from '@/shared/utils'
import { Link } from '@/shared/components/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export const NavLink = ({
  href,
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
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
