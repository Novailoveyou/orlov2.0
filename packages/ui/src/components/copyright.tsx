import { ComponentProps, Suspense } from 'react'
import { Year } from './year'
import { License } from './license'
import { Small } from './tags/small'
import { cn } from '../utils'
import { Span } from './tags/span'

type CopyrightProps = Pick<ComponentProps<typeof Small>, 'className'> & {
  name: string
  license?: Omit<ComponentProps<typeof License>, 'children'>
}

/**
 * @description A component to display copyright information with a link to the license.
 */
export function Copyright({ name, license, className }: CopyrightProps) {
  return (
    <Small className={cn(className)}>
      <License {...license}>
        <Span>&copy;</Span> {/* TODO: FIGURE OUT A WAY WITHOUT Suspense */}
        <Suspense>
          <Year />
        </Suspense>{' '}
        <Span>{name}</Span>
      </License>
    </Small>
  )
}
