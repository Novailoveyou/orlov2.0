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
  // DialogTrigger,
} from './shadcnui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  // DrawerTrigger,
} from './shadcnui/drawer'
import { Div } from './tags/div'

export const Dialog = ({
  children,
  onOpenChange: onOpenChangeProp,
}: Pick<
  React.ComponentProps<typeof DialogBase>,
  'children' | 'onOpenChange'
>) => {
  const [isOpen, setIsOpen] = React.useState(true)

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  })

  /** @description due to how next intercept & parallel routes work combined with shadcn/ui dialog, this wrapper is required so that user does not get ui jumps on rapid open/close */
  const onOpenChange = React.useCallback(
    (
      open: Parameters<
        Required<React.ComponentProps<typeof DialogBase>>['onOpenChange']
      >[0],
    ) => {
      setIsOpen(open)
      return onOpenChangeProp?.(open)
    },
    [onOpenChangeProp],
  )

  /** @description due to how next intercept & parallel routes work combined with shadcn/ui dialog, this is required to be done this way instead of having `open` always set to `true` so that user does not get ui jumps on rapid open/close */
  React.useEffect(() => {
    onOpenChange(true)
  }, [onOpenChange])

  if (isDesktop) {
    return (
      <DialogBase defaultOpen modal open={isOpen} onOpenChange={onOpenChange}>
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
    <Drawer defaultOpen modal open={isOpen} onOpenChange={onOpenChange}>
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
