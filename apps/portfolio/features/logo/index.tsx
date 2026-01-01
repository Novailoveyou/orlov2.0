import 'server-only'

import { ComponentProps } from 'react'
import { Link } from '@/shared/components/link'
import { LINKS } from '@/shared/constants'
import { LogoWithText } from './index-with-text'

export const Logo = ({
  className,
}: Pick<ComponentProps<typeof Link>, 'className'>) => {
  return (
    <Link href={LINKS.root} className={className}>
      <LogoWithText />
    </Link>
  )
}
