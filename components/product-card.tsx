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
        className="product-card h-full list-none"
      >
        <div className="product-card-inner group relative h-full rounded-xl border bg-card p-6 transition-all hover:border-primary">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            {images[0] && (
              <motion.img
                src={images[0].url}
                alt={images[0].altText || title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <motion.div 
            className="mt-6 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="line-clamp-1 text-xl font-semibold group-hover:pride-text">{title}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
            <div className="flex items-center justify-between pt-2">
              <p className="text-lg font-bold pride-text">{price}</p>
              <Button 
                size="icon" 
                variant="ghost"
                className="group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ShoppingCart className="h-5 w-5" />
                </motion.div>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.li>
    </Link>
  );
}