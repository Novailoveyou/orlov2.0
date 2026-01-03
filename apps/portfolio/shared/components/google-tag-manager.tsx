import { GoogleTagManager as GoogleTagManagerBase } from '@repo/ui/components/google-tag-manager'
// import { useLocale } from 'next-intl'

export { sendGTMEvent } from '@repo/ui/components/google-tag-manager'

export const GoogleTagManager = () => {
  // const locale = useLocale()

  // if (locale === 'ru') return null

  return <GoogleTagManagerBase gtmId='GTM-MXL9BNLG' />
}
