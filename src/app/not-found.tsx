'use client';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/registry/default/ui/button';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';

const NotFound = () => (
  <>
    <title>Page Not Found</title>

    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
      <div className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className='flex items-center justify-center w-9/12 min-h-screen py-16 m-auto'>
          <div className='pb-8 overflow-hidden shadow-lg sm:rounded-lg bg-muted/50 text-muted-foreground'>
            <div className='pt-8 text-center border-t'>
              <h1 className='font-bold text-9xl font-montserrat'>404</h1>
              <h1 className='py-8 text-6xl font-medium'>oops! Page not found</h1>
              <p className='px-12 pb-8 text-2xl font-medium'>
                Oops! The page you are looking for does not exist. It might have been moved or
                deleted.
              </p>
              <span className='flex items-center justify-center gap-4'>
                <Link href='/' className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
                  <span>Go back home</span>
                </Link>
                <Link
                  href='/contact'
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
                >
                  <span>Contact support</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  </>
);

export default NotFound;
