import { Suspense } from 'react';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { env } from '@/lib/env';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://pride2025.amsterdam'),
  title: {
    default: env.SITE_NAME,
    template: `%s | ${env.SITE_NAME}`
  },
  description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Shop exclusive Pride merchandise and be part of the movement. 🌈',
  keywords: ['Pride Amsterdam', 'Pride 2025', 'LGBTQ+', 'Pride Merchandise', 'Pride Celebration', 'Amsterdam Events'],
  authors: [{ name: 'Pride Amsterdam' }],
  creator: 'Pride Amsterdam',
  publisher: 'Pride Amsterdam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#FF1B6B'
      }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pride2025.amsterdam',
    title: 'Pride Amsterdam 2025 - Celebrate Love & Diversity',
    description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Shop exclusive Pride merchandise and be part of the movement. 🌈',
    siteName: env.SITE_NAME,
    images: [{
      url: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
      width: 1200,
      height: 630,
      alt: 'Pride Amsterdam 2025'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pride Amsterdam 2025 - Celebrate Love & Diversity',
    description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Shop exclusive Pride merchandise and be part of the movement. 🌈',
    images: ['https://images.unsplash.com/photo-1561612217-e5147162fd31'],
    creator: '@PrideAmsterdam',
    site: '@PrideAmsterdam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    title: 'Pride 2025',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/apple-splash-2048-2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <Suspense>
              <main>{children}</main>
            </Suspense>
            <Footer />
            <Toaster />
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}