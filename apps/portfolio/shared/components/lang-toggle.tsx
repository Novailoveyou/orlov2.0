'use client'
import 'client-only'

import { Logo } from '@/shared/images/logo'
import { Link } from '@/shared/components/link'

// TODO: figure out loading state for lang toggle && figure out a way to switch locale without going back to home page
export const LangToggle = () => {
  return (
    <>
      <Link href='/' locale='ru' pending='Loading...'>
        ru
      </Link>
      <Link href='/' locale='en' pending='Loading...'>
        en
      </Link>
    </>
  )
}
