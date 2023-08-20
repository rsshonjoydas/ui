import { Button } from '@/registry/new-york/ui/button';
import { Input } from '@/registry/new-york/ui/input';

export default function InputWithButton() {
  return (
    <div className='flex items-center w-full max-w-sm space-x-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit'>Subscribe</Button>
    </div>
  );
}
