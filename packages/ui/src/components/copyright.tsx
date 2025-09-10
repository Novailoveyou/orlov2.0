import { ComponentProps } from 'react'
import { Year } from './year'
import { License } from './license'

type CopyrightProps = Omit<ComponentProps<'small'>, 'children'> & {
  name: string
  license?: ComponentProps<typeof License>
}

/**
 * @description A component to display copyright information with a link to the license.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/small
 */
export function Copyright({ name, license, ...props }: CopyrightProps) {
  return (
    <small {...props}>
      <License {...license}>
        &copy; <Year year={new Date().getFullYear()} /> {name}
      </License>
    </small>
  )
}
