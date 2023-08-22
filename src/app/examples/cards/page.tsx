import { Metadata } from 'next';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { DemoCookieSettings } from './components/cookie-settings';
import { DemoCreateAccount } from './components/create-account';
import { DemoDatePicker } from './components/date-picker';
import { DemoGithub } from './components/github-card';
import { DemoNotifications } from './components/notifications';
import { DemoPaymentMethod } from './components/payment-method';
import { DemoReportAnIssue } from './components/report-an-issue';
import { DemoShareDocument } from './components/share-document';
import { DemoTeamMembers } from './components/team-members';

export const metadata: Metadata = {
  title: 'Cards',
  description: 'Examples of cards built using the components.',
};

function DemoContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-center [&>div]:w-full', className)} {...props} />
  );
}

export default function CardsPage() {
  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/examples/cards-light.png'
          width={1280}
          height={1214}
          alt='Cards'
          className='block dark:hidden'
        />
        <Image
          src='/examples/cards-dark.png'
          width={1280}
          height={1214}
          alt='Cards'
          className='hidden dark:block'
        />
      </div>
      <div className='items-start justify-center hidden gap-6 p-8 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3'>
        <div className='grid items-start col-span-2 gap-6 lg:col-span-1'>
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className='grid items-start col-span-2 gap-6 lg:col-span-1'>
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className='grid items-start col-span-2 gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1'>
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  );
}
