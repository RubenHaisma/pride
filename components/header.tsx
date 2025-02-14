'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CartSheet } from './cart-sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b-4 border-foreground bg-background"
    >
      <div className="container px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/" className="text-3xl font-black pride-gradient bg-clip-text text-transparent">
              PRIDE 2025
            </Link>
            <nav className="hidden items-center gap-12 md:flex">
              <Link href="/shop" className="nav-item">SHOP</Link>
              <Link href="/about" className="nav-item">ABOUT</Link>
              <Link href="/contact" className="nav-item">CONTACT</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <CartSheet />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        className="overflow-hidden border-t-4 border-foreground bg-background md:hidden"
      >
        <div className="space-y-1 p-4">
          <Link href="/shop" className="block p-4 nav-item">SHOP</Link>
          <Link href="/about" className="block p-4 nav-item">ABOUT</Link>
          <Link href="/contact" className="block p-4 nav-item">CONTACT</Link>
        </div>
      </motion.div>
    </motion.header>
  );
}