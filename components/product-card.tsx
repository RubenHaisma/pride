'use client';

import { Product } from '@/lib/shopify/types';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        whileHover={{ y: -5 }}
        className="h-full list-none"
      >
        <div className="group relative h-full rounded-xl border bg-card p-6 transition-all hover:border-primary shadow-lg hover:shadow-xl">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            {images[0] && (
              <img
                src={images[0].url}
                alt={images[0].altText || title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </div>
          <div className="mt-6 space-y-2">
            <h3 className="line-clamp-1 text-xl font-semibold group-hover:pride-text">{title}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center justify-between pt-2">
              <p className="text-lg font-bold">{price}</p>
              <Button size="icon" variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.li>
    </Link>
  );
}