'use client'
import 'client-only'

import * as React from 'react'

import { useMediaQuery } from 'react-responsive'
import { Button } from './shadcnui/button'
import {
  Dialog as DialogBase,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './shadcnui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './shadcnui/drawer'
import { Div } from './tags/div'

export const Dialog = ({
  children,
  onOpenChange,
}: Pick<
  React.ComponentProps<typeof DialogBase>,
  'children' | 'onOpenChange'
>) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  if (isDesktop) {
    return (
      <DialogBase open modal onOpenChange={onOpenChange}>
        {/* <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent className='sm:max-w-[425px] ui:overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Div className='ui:overflow-y-auto'>{children}</Div>
        </DialogContent>
      </DialogBase>
    )
  }

  return (
    <Drawer open modal onOpenChange={onOpenChange}>
      {/* <DrawerTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <Div className='ui:overflow-y-auto'>{children}</Div>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
