import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

import { Button } from '@/registry/new-york/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button>
      <EnvelopeOpenIcon className='w-4 h-4 mr-2' /> Login with Email
    </Button>
  );
}
