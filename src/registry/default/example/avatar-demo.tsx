import { Avatar, AvatarFallback, AvatarImage } from '@/registry/default/ui/avatar';

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/rsshonjoydas.png' alt='@rsshonjoydas' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
