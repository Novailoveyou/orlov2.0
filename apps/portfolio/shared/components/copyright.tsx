import 'server-only'

import { Copyright as CopyrightBase } from '@repo/ui/components/copyright'
import { ComponentProps } from 'react'

export const Copyright = ({
  ...props
}: ComponentProps<typeof CopyrightBase>) => <CopyrightBase {...props} />
