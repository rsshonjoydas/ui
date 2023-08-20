import { Mail } from 'lucide-react';

import { Button } from '@/registry/default/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button>
      <Mail className='w-4 h-4 mr-2' /> Login with Email
    </Button>
  );
}
