'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';
import * as React from 'react';

import { Button } from '@/registry/new-york/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/registry/new-york/ui/collapsible';

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className='w-[350px] space-y-2'>
      <div className='flex items-center justify-between px-4 space-x-4'>
        <h4 className='text-sm font-semibold'>@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='sm'>
            <CaretSortIcon className='w-4 h-4' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='px-4 py-2 font-mono text-sm border rounded-md shadow-sm'>
        @radix-ui/primitives
      </div>
      <CollapsibleContent className='space-y-2'>
        <div className='px-4 py-2 font-mono text-sm border rounded-md shadow-sm'>
          @radix-ui/colors
        </div>
        <div className='px-4 py-2 font-mono text-sm border rounded-md shadow-sm'>
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
