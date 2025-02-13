'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart-sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
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
      className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <a href="/" className="text-2xl font-bold">
              Pride 2025
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/shop" className="text-sm font-medium hover:text-primary">Shop</a>
            <a href="/about" className="text-sm font-medium hover:text-primary">About</a>
            <a href="/community" className="text-sm font-medium hover:text-primary">Community</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary">Contact</a>
          </nav>

          <div className="flex-1 flex items-center justify-end">
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
        className="md:hidden overflow-hidden bg-background border-t"
      >
        <div className="px-4 py-2 space-y-1">
          <a href="/shop" className="block px-3 py-2 text-base font-medium hover:text-primary">Shop</a>
          <a href="/about" className="block px-3 py-2 text-base font-medium hover:text-primary">About</a>
          <a href="/community" className="block px-3 py-2 text-base font-medium hover:text-primary">Community</a>
          <a href="/contact" className="block px-3 py-2 text-base font-medium hover:text-primary">Contact</a>
        </div>
      </motion.div>
    </motion.header>
  );
}