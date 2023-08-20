import { FontBoldIcon } from '@radix-ui/react-icons';

import { Toggle } from '@/registry/new-york/ui/toggle';

export default function ToggleDemo() {
  return (
    <Toggle aria-label='Toggle italic'>
      <FontBoldIcon className='w-4 h-4' />
    </Toggle>
  );
}
