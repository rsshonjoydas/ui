import { UnderlineIcon } from '@radix-ui/react-icons';

import { Toggle } from '@/registry/new-york/ui/toggle';

export default function ToggleDisabled() {
  return (
    <Toggle aria-label='Toggle italic' disabled>
      <UnderlineIcon className='w-4 h-4' />
    </Toggle>
  );
}
