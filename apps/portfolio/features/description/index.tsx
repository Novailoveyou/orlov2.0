import 'server-only'

import { useMessages, useTranslations, useFormatter } from 'next-intl'
import { ComponentProps } from 'react'
import { Div } from '@/shared/components/div'
import { TypeAnimation } from '@/shared/components/type-animation'
import { objectKeys } from '@/shared/utils'

export const Description = ({
  className,
}: Pick<ComponentProps<typeof Div>, 'className'>) => {
  const t = useTranslations('features.description.descriptions')

  const format = useFormatter()
  const messages = useMessages()
  const descriptionKeys = objectKeys(messages.features.description.descriptions)

  const items = descriptionKeys.map(descriptionKey => t(descriptionKey))

  const ariaLabel = format.list(items, { type: 'conjunction' })

  return (
    <TypeAnimation
      className={className}
      items={items}
      role='note'
      aria-label={ariaLabel}
    />
  )
}
