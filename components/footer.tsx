'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="container px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-black pride-gradient bg-clip-text text-transparent">PRIDE 2025</h3>
            <p className="font-mono text-sm">
              CELEBRATING LOVE, UNITY, AND DIVERSITY IN AMSTERDAM.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 font-mono text-lg">SHOP</h4>
            <ul className="space-y-4">
              <li><Link href="/shop" className="footer-link">ALL PRODUCTS</Link></li>
              <li><Link href="/shop?category=new" className="footer-link">NEW ARRIVALS</Link></li>
              <li><Link href="/shop?category=featured" className="footer-link">FEATURED</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-mono text-lg">ABOUT</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="footer-link">OUR STORY</Link></li>
              <li><Link href="/about#impact" className="footer-link">OUR IMPACT</Link></li>
              <li><Link href="/contact" className="footer-link">CONTACT</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-6 font-mono text-lg">LEGAL</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="footer-link">PRIVACY POLICY</Link></li>
              <li><Link href="/terms" className="footer-link">TERMS OF SERVICE</Link></li>
              <li><Link href="/shipping" className="footer-link">SHIPPING INFO</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t-4 border-foreground pt-8">
          <p className="flex items-center justify-center gap-2 font-mono text-sm">
            MADE WITH <Heart className="h-4 w-4 text-primary fill-current" /> IN AMSTERDAM
          </p>
        </div>
      </div>
    </footer>
  );
}