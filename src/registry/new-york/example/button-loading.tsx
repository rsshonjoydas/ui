import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/registry/new-york/ui/button';

export default function ButtonLoading() {
  return (
    <Button disabled>
      <ReloadIcon className='w-4 h-4 mr-2 animate-spin' />
      Please wait
    </Button>
  );
}
