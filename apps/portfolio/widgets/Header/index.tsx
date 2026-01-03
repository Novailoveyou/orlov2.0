import 'server-only'

import { Suspense } from 'react'
import { LangToggle } from '@/features/lang-toggle'
import { ModeToggle } from '@/features/mode-toggle'
import { ContactButton } from '@/features/contact-button'
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
// 🕶️ Reader Mode
// 📏 Text Size
// 📱 View Mode Toggle
// 🎨 Customize/Create
// 👁️ View As/Preview
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

export const Header = () => {
  return (
    <HeaderBase className='flex flex-wrap justify-between items-center gap-4 mb-6 pt-5'>
      <Div>
        {/* TODO: figure this out without using suspense */}
        <Suspense>
          <LangToggle />
        </Suspense>
        <ModeToggle />
        {/* TODO: notifications toggle */}
      </Div>
      <Logo />
      <Div>
        <ContactButton />
        {/* TODO: share button */}
        {/* TODO: search button */}
        {/* TODO: print button */}
        {/* TODO: user account button */}
      </Div>
    </HeaderBase>
  )
}
