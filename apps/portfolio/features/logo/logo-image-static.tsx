import 'server-only'

import { Image } from '@/shared/components/image'
import logo from './logo.svg'
import { ComponentProps } from 'react'
import { APP_NAME } from '@/shared/constants'

export const LogoImageStatic = ({
  alt = APP_NAME,
}: Partial<Pick<ComponentProps<typeof Image>, 'alt'>>) => {
  return <Image src={logo} desiredWidth={38} alt={alt} priority />
}
