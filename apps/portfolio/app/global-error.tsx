'use client'
import { GlobalError } from '@/shared/components/global-error'
import { ComponentProps } from 'react'

export default function Error(props: ComponentProps<typeof GlobalError>) {
  return <GlobalError {...props} />
}
