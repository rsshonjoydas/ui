import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

import { ExamplesNav } from '@/components/examples-nav';
import { Icons } from '@/components/icons';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/registry/new-york/ui/button';
import { Separator } from '@/registry/new-york/ui/separator';
import DashboardPage from './examples/dashboard/page';

export default function IndexPage() {
  return (
    <div className='container relative'>
      <PageHeader className='pb-8'>
        <Link
          href='/docs/changelog'
          className='inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg bg-muted'
        >
          🎉 <Separator className='h-4 mx-2' orientation='vertical' />{' '}
          <span className='sm:hidden'>Style, a new CLI and more.</span>
          <span className='hidden sm:inline'>Introducing Style, a new CLI and more.</span>
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </Link>
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible.
          Customizable. Open Source.
        </PageHeaderDescription>
        <div className='flex items-center w-full pt-4 pb-8 space-x-4 md:pb-10'>
          <Link href='/docs' className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.GitHub className='w-4 h-4 mr-2' />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <ExamplesNav className='[&>a:first-child]:text-primary' />
      <section className='space-y-8 overflow-hidden border-2 rounded-lg border-primary dark:border-muted md:hidden'>
        <Image
          src='/examples/dashboard-light.png'
          width={1280}
          height={866}
          alt='Dashboard'
          className='block dark:hidden'
        />
        <Image
          src='/examples/dashboard-dark.png'
          width={1280}
          height={866}
          alt='Dashboard'
          className='hidden dark:block'
        />
      </section>
      <section className='hidden md:block'>
        <div className='overflow-hidden border rounded-lg shadow bg-background'>
          <DashboardPage />
        </div>
      </section>
    </div>
  );
}
