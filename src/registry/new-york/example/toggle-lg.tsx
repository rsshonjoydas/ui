import { FontItalicIcon } from '@radix-ui/react-icons';

import { Toggle } from '@/registry/new-york/ui/toggle';

export default function ToggleLg() {
  return (
    <Toggle size='lg' aria-label='Toggle italic'>
      <FontItalicIcon className='w-4 h-4' />
    </Toggle>
  );
}
