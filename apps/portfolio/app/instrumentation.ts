import { APP_NAME } from '@/shared/constants'
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({
    serviceName: APP_NAME,
  })
}
