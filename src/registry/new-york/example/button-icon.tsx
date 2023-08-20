import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/registry/new-york/ui/button';

export default function ButtonIcon() {
  return (
    <Button variant='outline' size='icon'>
      <ChevronRightIcon className='w-4 h-4' />
    </Button>
  );
}
