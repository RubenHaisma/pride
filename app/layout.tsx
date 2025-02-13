import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { CartProvider } from '@/context/cart-context';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pride 2025 - Celebrate Love & Unity',
  description: 'Official Pride 2025 merchandise store. Join the celebration with our exclusive collection of Pride gear.',
  openGraph: {
    title: 'Pride 2025 - Celebrate Love & Unity',
    description: 'Official Pride 2025 merchandise store. Join the celebration with our exclusive collection of Pride gear.',
    url: 'https://2025.nl',
    siteName: 'Pride 2025',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d',
        width: 1200,
        height: 630,
        alt: 'Pride 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}