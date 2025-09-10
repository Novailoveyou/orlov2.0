'use client'

import { ReactNode } from 'react'
import { cn } from '../utils'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={cn('ui:bg-amber-300 ui:px-4', className)}
      onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  )
}
