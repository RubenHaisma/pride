'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="container py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black pride-gradient bg-clip-text text-transparent">PRIDE 2025</h3>
            <p className="font-mono text-sm">
              CELEBRATING LOVE, UNITY, AND DIVERSITY IN AMSTERDAM.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-lg mb-4">SHOP</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/shop" className="footer-link">ALL PRODUCTS</Link>
              <Link href="/shop?category=new" className="footer-link">NEW ARRIVALS</Link>
              <Link href="/shop?category=featured" className="footer-link">FEATURED</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-lg mb-4">ABOUT</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/about#our-story" className="footer-link">OUR STORY</Link>
              <Link href="/about#mission" className="footer-link">OUR MISSION</Link>
              <Link href="/about#impact" className="footer-link">OUR IMPACT</Link>
              <Link href="/contact" className="footer-link">CONTACT</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-lg mb-4">LEGAL</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy" className="footer-link">PRIVACY POLICY</Link>
              <Link href="/terms" className="footer-link">TERMS OF SERVICE</Link>
              <Link href="/shipping" className="footer-link">SHIPPING INFO</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-20 border-t-4 border-foreground pt-8">
          <p className="flex items-center justify-center gap-2 font-mono text-sm">
            MADE WITH <Heart className="h-4 w-4 text-primary fill-current" /> IN AMSTERDAM
          </p>
          <p className="flex items-center justify-center gap-2 font-mono text-sm mt-2">
            Website by <a href="https://incubit.nl" className="text-primary">incubit.nl</a>
          </p>
        </div>
      </div>
    </footer>
  );
}