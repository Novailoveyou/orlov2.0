'use client'
import 'client-only'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from './shadcnui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './shadcnui/dropdown-menu'
import { Span } from './tags/span'

/**
 * @description ModeToggleDropdown component to toggle between light, dark, and system themes
 * @see https://ui.shadcn.com/docs/dark-mode/next
 */
export function ModeToggleDropdown({
  name = 'Toggle Theme',
  light = 'Light',
  dark = 'Dark',
  system = 'System',
}: {
  name: string
  light: string
  dark: string
  system: string
}) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='ui:w-[1.2rem] ui:h-[1.2rem] ui:dark:-rotate-90 ui:rotate-0 ui:dark:scale-0 ui:scale-100 ui:transition-all' />
          <Moon className='ui:absolute ui:w-[1.2rem] ui:h-[1.2rem] ui:dark:rotate-0 ui:rotate-90 ui:dark:scale-100 ui:scale-0 ui:transition-all' />
          <Span className='ui:sr-only'>{name}</Span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
