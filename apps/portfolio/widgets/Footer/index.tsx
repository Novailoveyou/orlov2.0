import 'server-only'

import { Footer as FooterBase } from '@/shared/components/footer'
import { LegalLinks } from '@/features/legal-links'
import { SMLinks } from '@/features/sm-links'
// import { APP_NAME } from '@/shared/constants'
// import { Copyright } from '@/shared/components/copyright'

export const Footer = () => {
  return (
    <FooterBase>
      <div className='flex justify-between gap-4'>
        <SMLinks />
      </div>
      <div className='flex flex-row-reverse justify-between gap-4'>
        <LegalLinks />
        {/* <Copyright name={APP_NAME} /> */}
      </div>
    </FooterBase>
  )
}
