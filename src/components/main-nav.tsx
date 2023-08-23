'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='hidden mr-4 md:flex'>
      <Link href='/' className='flex items-center mr-6 space-x-2'>
        <Icons.Logo className='w-6 h-6' />
        <span className='hidden font-bold sm:inline-block'>{siteConfig.name}</span>
      </Link>
      <nav className='flex items-center space-x-6 text-sm font-medium'>
        <Link
          href='/docs'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Documentation
        </Link>
        <Link
          href='/components'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/components') ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Components
        </Link>
        <Link
          href='/themes'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/themes') ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Themes
        </Link>
        <Link
          href='/examples'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/examples') ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Examples
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block'
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
