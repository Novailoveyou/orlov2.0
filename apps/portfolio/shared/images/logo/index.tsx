import 'server-only'

import { Image } from '@/shared/components/image'
import logo from './logo.svg'
import { ComponentProps } from 'react'
import { cn } from '@/shared/utils'
import { Link } from '@/shared/components/link'
import { LINKS } from '@/shared/constants'

const i18n = {
  iliaOrlov: 'Ilia Orlov',
  loading: 'Loading...',
}

export const Logo = ({
  className,
}: Pick<ComponentProps<typeof Image>, 'className'>) => (
  <Link href={LINKS.root} pending={i18n.loading} className={cn(className)}>
    <Image
      className='max-w-[12.0625rem]'
      src={logo}
      alt={i18n.iliaOrlov}
      priority
    />
  </Link>
)
