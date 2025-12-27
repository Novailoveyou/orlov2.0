'use client'
import { Error as SharedError } from '@/shared/components/error'
import { ComponentProps } from 'react'

export default function Error(props: ComponentProps<typeof SharedError>) {
  return <SharedError {...props} />
}
