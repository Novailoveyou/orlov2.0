import 'server-only'

import { Suspense } from 'react'
import { LangToggle } from '@/features/lang-toggle'
import { ModeToggle } from '@/features/mode-toggle'
import { ContactButton } from '@/features/contact-button'
// import { NotificationsButton } from '@/features/notifications-button'
import { ShareButton } from '@/features/share-button'
import { Logo } from '@/features/logo'
import { Div } from '@/shared/components/div'
import { Header as HeaderBase } from '@/shared/components/header'

// 🛒 Shopping Cart
// ❤️ Wishlist/Favorites
// 📅 Calendar/Schedule
// 📥 Download/Export
// 📖 Help/Support
// 💬 Feedback
// 📖 Read Later
// 📋 Bookmarks/Saved Items
// 📌 Pin/Sticky Notes
// 📶 Network/Connection
// 🎵 Music/Media Control
// 🔊 Audio/Mute Toggle
// 🗑️ Clear/Reset
// 📊 Data/Reports
// 🔄 Sync/Refresh
// 📍 Location/Region
// 🎛️ Quick Settings
// 🔒 Privacy/Security Quick Access
// 🏠 Home/Dashboard

// 👁️ View As/Preview
// 🎨 Customize/Create
// 📏 Text Size
// 🕶️ Reader Mode
// 📱 View Mode Toggle

/* TODO: search button */
/* TODO: user account button */
/* TODO: print button */

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap justify-between items-center gap-4 pt-5'>
      <Div className='flex flex-wrap gap-1'>
        {/* TODO: figure this out without using suspense */}
        <Suspense>
          <LangToggle />
        </Suspense>
        <ModeToggle />
      </Div>
      <Logo />
      <Div className='flex flex-wrap gap-1'>
        <ShareButton />
        <ContactButton />
        {/* TODO: notifications */}
        {/* <NotificationsButton /> */}
      </Div>
    </HeaderBase>
  )
}
