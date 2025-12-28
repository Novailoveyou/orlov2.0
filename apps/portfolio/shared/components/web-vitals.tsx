import { WebVitals as BaseWebVitals } from '@repo/ui/components/web-vitals'
import { ComponentProps } from 'react'
import { APP_NAME } from '@/shared/constants'

export const WebVitals = (
  props: Omit<ComponentProps<typeof BaseWebVitals>, 'appName'>,
) => <BaseWebVitals appName={APP_NAME} {...props} />
