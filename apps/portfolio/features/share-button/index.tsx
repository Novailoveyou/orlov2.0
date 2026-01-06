'use client'
import 'client-only'

import { RiShareForwardLine } from 'react-icons/ri'
// import { RiShare2Line } from 'react-icons/ri'
import { RWebShare } from 'react-web-share'

import { Icon } from '@/shared/components/icon'

import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  ThreadsShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share'

import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from 'react-share'

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  ThreadsIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
  BlueskyIcon,
} from 'react-share'
import { Button } from '@/shared/components/button'

export const ShareButton = () => {
  // TODO: add i18n
  return (
    <RWebShare
      data={{
        url: 'https://orlov.app',
        title: 'Orlov App',
        text: 'Check out Orlov App! https://orlov.app',
      }}>
      <Button variant='ghost' size='icon' className='px-2'>
        {/* TODO: add aria label */}
        <Icon
          width='w-[1.2rem]'
          height='h-[1.2rem]'
          Icon={RiShareForwardLine}
          aria-label='share'
        />
        {/* <TelegramShareButton url='https://orlov.app'>
        <TelegramIcon />
      </TelegramShareButton>
      <FacebookShareCount url='https://orlov.app' /> */}
      </Button>
    </RWebShare>
  )
}
