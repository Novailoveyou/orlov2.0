// import { P } from '@/shared/components/p'
import LoadingIcons from 'react-loading-icons'
import { Icon } from '@/shared/components/icon'
import { Div } from '@/shared/components/div'
// import { useTranslations } from 'next-intl'

// TODO: finish loading component with translations
export default function Loading() {
  // const t = useTranslations('app.home.loading')
  // return <P>{t('loading')}</P>
  return (
    <Div className='flex justify-center items-center min-h-dvh'>
      <Icon
        width='w-1.2rem'
        height='h-1.2rem'
        Icon={LoadingIcons.Bars}
        aria-label='Loading...'
      />
    </Div>
  )
}
