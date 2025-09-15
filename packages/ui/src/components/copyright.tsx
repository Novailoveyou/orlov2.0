import { ComponentProps } from 'react'
import { Year } from './year'
import { License } from './license'
import { Small } from './tags/small'
import { cn } from '../utils'

type CopyrightProps = Pick<ComponentProps<typeof Small>, 'className'> & {
  name: string
  license?: ComponentProps<typeof License>
}

/**
 * @description A component to display copyright information with a link to the license.
 */
export function Copyright({ name, license, className }: CopyrightProps) {
  return (
    <Small className={cn(className)}>
      <License {...license}>
        &copy; <Year year={new Date().getFullYear()} /> {name}
      </License>
    </Small>
  )
}
