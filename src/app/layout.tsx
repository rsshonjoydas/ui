import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/providers';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeSwitcher } from '@/components/theme-switcher';
import env from '@/config/env';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { absoluteUrl, cn } from '@/lib/utils';
import { Toaster as DefaultToaster } from '@/registry/default/ui/toaster';
import { Toaster as NewYorkToaster } from '@/registry/new-york/ui/toaster';
import '@/styles/index.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: `@${env.TWITTER_URL}`,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body
        suppressHydrationWarning
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative flex flex-col min-h-screen'>
            <SiteHeader />
            <div className='flex-1'>{children}</div>
            <SiteFooter />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        <ThemeSwitcher />
        <Analytics />
        <NewYorkToaster />
        <DefaultToaster />
      </body>
    </html>
  );
}
