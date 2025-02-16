'use client';

import { Product } from '@/lib/shopify/types';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Link from 'next/link';
import { formatMoney } from '@/lib/shopify/utils';
import { Button } from './ui/button';
import { useCart } from '@/context/cart-context';
import { toast } from 'sonner';

export function ProductCard({ product }: { product: Product }) {
  const { handle, title, priceRange, images } = product;
  const { addItem } = useCart();
  const price = formatMoney(
    priceRange.minVariantPrice.amount,
    priceRange.minVariantPrice.currencyCode
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Get the first variant ID and remove the Shopify prefix
    const variantId = product.variants[0].id.replace('gid://shopify/ProductVariant/', '');
    
    addItem({
      id: variantId,
      title: product.title,
      price: `${product.priceRange.minVariantPrice.amount} ${product.priceRange.minVariantPrice.currencyCode}`,
      image: product.images[0].url,
      quantity: 1,
    });
    toast.success('Added to cart');
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative list-none"
    >
      <Link href={`/shop/${handle}`} className="block">
        <div className="relative overflow-hidden brutalist-card">
          <div className="aspect-square overflow-hidden bg-secondary">
            {images[0] && (
              <img
                src={images[0].url}
                alt={images[0].altText || title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
            <div className="flex gap-2">
              <Button
                size="lg"
                className="flex-1 brutalist-button"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-mono uppercase truncate">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-black pride-gradient bg-clip-text text-transparent">
              {price}
            </p>
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </Link>
    </motion.li>
  );
}