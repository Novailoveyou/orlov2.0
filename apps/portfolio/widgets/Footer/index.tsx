import 'server-only'

import { Footer as FooterBase } from '@/shared/components/footer'
import { LegalLinks } from '@/features/legal-links'
import { SMLinks } from '@/features/sm-links'
import { Copyright } from '@/shared/components/copyright'

export const Footer = () => {
  return (
    <FooterBase role='contentinfo' className='flex justify-between gap-4 pb-5'>
      <div className='flex flex-col justify-between gap-4'>
        <SMLinks />
        <Copyright />
      </div>
      <div className='flex flex-col justify-between gap-4'>
        <LegalLinks />
      </div>
    </FooterBase>
  )
}
