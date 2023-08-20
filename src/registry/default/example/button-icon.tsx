import { ChevronRight } from 'lucide-react';

import { Button } from '@/registry/default/ui/button';

export default function ButtonIcon() {
  return (
    <Button variant='outline' size='icon'>
      <ChevronRight className='w-4 h-4' />
    </Button>
  );
}
