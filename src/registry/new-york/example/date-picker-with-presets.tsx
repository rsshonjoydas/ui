/* eslint-disable radix */

'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york/ui/button';
import { Calendar } from '@/registry/new-york/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/new-york/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/new-york/ui/select';

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='w-4 h-4 mr-2' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='flex flex-col w-auto p-2 space-y-2'>
        <Select onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
          <SelectTrigger>
            <SelectValue placeholder='Select' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='0'>Today</SelectItem>
            <SelectItem value='1'>Tomorrow</SelectItem>
            <SelectItem value='3'>In 3 days</SelectItem>
            <SelectItem value='7'>In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className='border rounded-md'>
          <Calendar mode='single' selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
