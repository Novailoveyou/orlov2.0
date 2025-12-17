'use client'
import 'client-only'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Toggle } from './shadcnui/toggle'
import { cn } from '../utils'
import { Span } from './tags/span'

/**
 * @description ModeToggle component to toggle between light and dark themes
 */
export function ModeToggle({
  className,
  'aria-label': ariaLabel = 'Toggle theme',
  ...props
}: Omit<React.ComponentProps<typeof Toggle>, 'pressed' | 'onPressedChange'>) {
  const { setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Toggle
      className={cn('ui:cursor-pointer', className)}
      pressed={false}
      onPressedChange={handleTheme}
      aria-label={ariaLabel}
      {...props}>
      <Sun
        className={cn(
          'ui:hidden ui:dark:inline-block ui:w-[1.2rem] ui:h-[1.2rem]',
        )}
      />
      <Moon
        className={cn(
          'ui:dark:hidden ui:inline-block ui:w-[1.2rem] ui:h-[1.2rem]',
        )}
      />
      <Span className='ui:sr-only'>{ariaLabel}</Span>
    </Toggle>
  )
}
