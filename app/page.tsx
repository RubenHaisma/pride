'use client';

import { motion } from 'framer-motion';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center border-b-4 border-foreground">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-8xl md:text-[12rem] leading-none font-black">
              PRIDE
              <span className="block pride-gradient text-transparent bg-clip-text">2025</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-mono">
              AMSTERDAM&apos;S BOLDEST CELEBRATION OF LOVE
            </p>

            <div className="flex flex-wrap gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="brutalist-button text-lg px-8 py-6"
                asChild
              >
                <a href="#shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  SHOP NOW
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-32">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-6xl font-black">OFFICIAL COLLECTION</h2>
            <div className="h-2 w-40 pride-gradient mx-auto"></div>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <Grid className="brutalist-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          )}
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 bg-foreground text-background border-y-4 border-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-black mb-12">OUR VALUES</h2>
            <div className="space-y-8 text-xl font-mono">
              <p>LOVE WITHOUT BOUNDARIES</p>
              <p>CELEBRATE EVERY COLOR OF THE RAINBOW</p>
              <p>UNITY IN DIVERSITY</p>
              <p>PRIDE IS FOR EVERYONE</p>
              <div className="flex justify-center pt-8">
                <Heart className="h-24 w-24 text-primary fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}