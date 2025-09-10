import { ComponentProps } from 'react'

type License = {
  label: string
  href: `https://${string}`
  short: string
}

export const LICENSES = {
  'CC BY 4.0': {
    label: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
    href: 'https://creativecommons.org/licenses/by/4.0/',
    short: 'CC BY 4.0',
  },
  'CC BY-NC-ND 4.0': {
    label:
      'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)',
    href: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    short: 'CC BY-NC-ND 4.0',
  },
} as const satisfies Record<License['short'], License>

type LicenseProps = Omit<ComponentProps<'a'>, 'rel' | 'target' | 'href'> & {
  license?:
    | (License['href'] & {})
    | (typeof LICENSES)[keyof typeof LICENSES]['href']
}

/**
 * @description A component to display a link to a license.
 * @see https://creativecommons.org/
 * @todo add support for different licenses
 * @todo add support for Next.js Link component
 */
export function License({
  children,
  license = 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
  ...props
}: LicenseProps) {
  return (
    <a
      rel='license noopener noreferrer'
      target='_blank'
      href={license}
      {...props}>
      {children}
    </a>
  )
}
