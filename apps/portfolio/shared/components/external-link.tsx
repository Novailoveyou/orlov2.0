import { ComponentProps } from 'react'
import { ExternalLink as BaseExternalLink } from '@repo/ui/components/external-link'

export function ExternalLink({
  ...props
}: ComponentProps<typeof BaseExternalLink>) {
  return <BaseExternalLink {...props} />
}
