import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/registry/default/ui/alert';

export default function AlertDemo() {
  return (
    <Alert>
      <Terminal className='w-4 h-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}
