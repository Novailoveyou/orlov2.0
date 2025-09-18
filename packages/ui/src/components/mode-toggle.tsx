'use client'
import 'client-only'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Toggle } from './shadcnui/toggle'
import { cn } from '../utils'

/**
 * @description ModeToggle component to toggle between light and dark themes
 */
export function ModeToggle() {
  const { setTheme } = useTheme()

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Toggle
      pressed={false}
      onPressedChange={handleTheme}
      aria-label='Toggle theme'>
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
      <span className='ui:sr-only'>Toggle theme</span>
    </Toggle>
  )
}
