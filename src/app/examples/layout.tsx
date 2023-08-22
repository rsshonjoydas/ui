import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';

import { ExamplesNav } from '@/components/examples-nav';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/registry/new-york/ui/button';
import { Separator } from '@/registry/new-york/ui/separator';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'Check out some examples app built using the components.',
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className='container relative'>
      <PageHeader className='pb-8 page-header'>
        <Link
          href='/docs/changelog'
          className='inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg bg-muted'
        >
          🎉 <Separator className='h-4 mx-2' orientation='vertical' />{' '}
          <span className='sm:hidden'>Style, a new CLI and more.</span>
          <span className='hidden sm:inline'>Introducing Style, a new CLI and more.</span>
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </Link>
        <PageHeaderHeading className='hidden md:block'>Check out some examples.</PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>Examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the components. Use this as a
          guide to build your own.
        </PageHeaderDescription>
        <section className='flex items-center w-full pt-4 pb-8 space-x-4 md:pb-10'>
          <Link href='/docs' className={cn(buttonVariants(), 'rounded-[6px]')}>
            Get Started
          </Link>
          <Link
            href='/components'
            className={cn(buttonVariants({ variant: 'outline' }), 'rounded-[6px]')}
          >
            Components
          </Link>
        </section>
      </PageHeader>
      <section>
        <ExamplesNav />
        <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
          {children}
        </div>
      </section>
    </div>
  );
}
