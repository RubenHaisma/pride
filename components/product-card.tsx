'use client';

import { Product } from '@/lib/shopify/types';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Link from 'next/link';
import { formatMoney } from '@/lib/shopify/utils';

export function ProductCard({ product }: { product: Product }) {
  const { handle, title, description, priceRange, images } = product;
  const price = formatMoney(
    priceRange.minVariantPrice.amount,
    priceRange.minVariantPrice.currencyCode
  );

  return (
    <Link href={`/shop/${handle}`}>
      <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="product-card list-none"
      >
        <div className="relative group">
          <div className="aspect-square overflow-hidden rounded-2xl glass prismatic-border">
            {images[0] && (
              <img
                src={images[0].url}
                alt={images[0].altText || title}
                className="h-full w-full object-cover product-image"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                className="flex gap-4"
              >
                <button className="w-12 h-12 rounded-full liquid-button flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <ShoppingBag className="h-6 w-6" />
                </button>
                <button className="w-12 h-12 rounded-full holographic flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6" />
                </button>
              </motion.div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold group-hover:neon-text transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            <p className="text-lg font-bold neon-text">{price}</p>
          </div>
        </div>
      </motion.li>
    </Link>
  );
}