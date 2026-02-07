'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Calendar } from '@/shared/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover'

export const DatePicker = (
  calendarProps: React.ComponentProps<typeof Calendar>,
) => {
  const date =
    calendarProps.mode === 'single' ? calendarProps.selected : undefined

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          data-empty={!date}
          className='justify-start w-[280px] font-normal data-[empty=true]:text-muted-foreground text-left'>
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-auto'>
        <Calendar {...calendarProps} />
      </PopoverContent>
    </Popover>
  )
}
