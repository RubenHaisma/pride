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

const defaultMetadata = {
  metadataBase: new URL('https://pride2025.nl'),
  title: {
    default: env.SITE_NAME,
    template: `%s | ${env.SITE_NAME}`
  },
  description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Experience unforgettable events, shop exclusive Pride merchandise, and be part of the movement. 🌈',
  keywords: [
    'Pride Amsterdam', 'Pride 2025', 'LGBTQ+', 'Pride Events', 'Pride Merchandise',
    'Amsterdam Pride', 'Canal Parade', 'Pride Festival', 'LGBTQ+ Events',
    'Pride Celebration', 'Amsterdam Events', 'Pride Shop', 'Rainbow Merchandise'
  ],
  authors: [{ name: 'Pride Amsterdam' }],
  creator: 'Pride Amsterdam',
  publisher: 'Pride Amsterdam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://pride2025.nl',
    languages: {
      'en-US': 'https://pride2025.nl/en',
      'nl-NL': 'https://pride2025.nl/nl',
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
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
    alternateLocale: 'nl_NL',
    url: 'https://pride2025.nl',
    title: 'Pride Amsterdam 2025 - Celebrate Love & Diversity',
    description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Experience unforgettable events, shop exclusive Pride merchandise, and be part of the movement. 🌈',
    siteName: env.SITE_NAME,
    images: [{
      url: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
      width: 1200,
      height: 630,
      alt: 'Pride Amsterdam 2025 - A celebration of love and diversity'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pride Amsterdam 2025 - Celebrate Love & Diversity',
    description: 'Join Amsterdam Pride 2025 - The biggest celebration of love, diversity, and unity. Experience unforgettable events, shop exclusive Pride merchandise, and be part of the movement. 🌈',
    images: ['https://images.unsplash.com/photo-1561612217-e5147162fd31'],
    creator: '@PrideAmsterdam',
    site: '@PrideAmsterdam',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    bing: 'your-bing-verification',
  },
  appleWebApp: {
    title: 'Pride 2025',
    statusBarStyle: 'black-translucent' as const,
    startupImage: [
      {
        url: '/apple-splash-2048-2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
      }
    ]
  }
};

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Schema.org Event markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Festival',
              name: 'Pride Amsterdam 2025',
              description: 'Amsterdam Pride 2025 - A celebration of love, diversity, and unity in the heart of Amsterdam.',
              startDate: '2025-07-27',
              endDate: '2025-08-04',
              location: {
                '@type': 'Place',
                name: 'Amsterdam City Center',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Amsterdam',
                  addressRegion: 'NH',
                  addressCountry: 'NL'
                }
              },
              image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
              url: 'https://pride2025.nl',
              organizer: {
                '@type': 'Organization',
                name: 'Pride Amsterdam',
                url: 'https://pride2025.nl'
              },
              offers: {
                '@type': 'Offer',
                url: 'https://pride2025.nl/tickets',
                availability: 'https://schema.org/InStock'
              },
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pride Amsterdam',
              url: 'https://pride2025.nl',
              logo: 'https://pride2025.nl/logo.png',
              sameAs: [
                'https://facebook.com/prideamsterdam',
                'https://twitter.com/prideamsterdam',
                'https://instagram.com/prideamsterdam'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+31-20-123-4567',
                contactType: 'customer service',
                email: 'info@pride2025.nl'
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Pride Amsterdam 2025',
              url: 'https://pride2025.nl',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://pride2025.nl/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
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