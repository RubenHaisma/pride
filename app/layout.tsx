import { Suspense } from 'react';
import { GeistSans } from 'geist/font/sans';
import { Analytics } from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { env } from '@/lib/env';
import '@/styles/globals.css';

export const metadata = {
  title: {
    default: env.SITE_NAME,
    template: `%s | ${env.SITE_NAME}`
  },
  description: 'Official Pride 2025 merchandise store. Join the celebration with our exclusive collection of Pride gear.',
  robots: {
    follow: true,
    index: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider>
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