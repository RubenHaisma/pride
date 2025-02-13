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
      className="fixed left-0 right-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/" className="text-2xl font-bold pride-text">
              Pride 2025
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/shop" className="text-sm font-medium hover:pride-text transition-all">Shop</Link>
              <Link href="/about" className="text-sm font-medium hover:pride-text transition-all">About</Link>
              <Link href="/contact" className="text-sm font-medium hover:pride-text transition-all">Contact</Link>
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
        className="overflow-hidden border-t bg-background/95 backdrop-blur-md md:hidden"
      >
        <div className="space-y-1 p-4">
          <Link href="/shop" className="block rounded-lg px-4 py-2 text-base font-medium hover:pride-text transition-all">Shop</Link>
          <Link href="/about" className="block rounded-lg px-4 py-2 text-base font-medium hover:pride-text transition-all">About</Link>
          <Link href="/contact" className="block rounded-lg px-4 py-2 text-base font-medium hover:pride-text transition-all">Contact</Link>
        </div>
      </motion.div>
    </motion.header>
  );
}