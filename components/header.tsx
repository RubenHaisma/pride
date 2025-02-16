'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
      className="mobile-header"
    >
      <div className="container">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-12">
            <Button 
              variant="ghost" 
              size="icon" 
              className="touch-button md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/" className="text-2xl sm:text-3xl font-black pride-gradient bg-clip-text text-transparent">
              PRIDE 2025
            </Link>
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link href="/events" className="nav-item">EVENTS</Link>
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
          open: { 
            height: "100vh",
            opacity: 1,
            display: "block"
          },
          closed: {
            height: 0,
            opacity: 0,
            transitionEnd: {
              display: "none"
            }
          }
        }}
        className="mobile-menu md:hidden"
      >
        <div className="container py-8">
          <nav className="mobile-nav">
            <Link 
              href="/events" 
              className="nav-item text-2xl" 
              onClick={() => setIsOpen(false)}
            >
              EVENTS
            </Link>
            <Link 
              href="/shop" 
              className="nav-item text-2xl" 
              onClick={() => setIsOpen(false)}
            >
              SHOP
            </Link>
            <Link 
              href="/about" 
              className="nav-item text-2xl" 
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className="nav-item text-2xl" 
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}