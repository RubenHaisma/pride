'use client';

import { Product } from '@/lib/shopify/types';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { formatMoney } from '@/lib/shopify/utils';

export function ProductCard({ product }: { product: Product }) {
  const { handle, title, priceRange, images } = product;
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
        className="brutalist-card list-none bg-card"
      >
        <div className="relative group">
          <div className="aspect-square overflow-hidden">
            {images[0] && (
              <img
                src={images[0].url}
                alt={images[0].altText || title}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ShoppingBag className="h-12 w-12" />
            </div>
          </div>
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-mono uppercase">{title}</h3>
            <p className="text-2xl font-black">{price}</p>
          </div>
        </div>
      </motion.li>
    </Link>
  );
}