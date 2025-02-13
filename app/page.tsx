'use client';

import { motion } from 'framer-motion';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';
import { Loader2, Heart, PartyPopper, Users } from 'lucide-react';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 pride-gradient opacity-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold pride-text"
            >
              Pride 2025
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground"
            >
              Join us in celebrating love, unity, and diversity at Pride Amsterdam 2025.
              Every purchase supports LGBTQ+ organizations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#shop" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Shop Now
              </a>
              <a href="#about" className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background shadow-lg"
            >
              <Heart className="w-12 h-12 text-[#FF1B6B]" />
              <h3 className="text-xl font-semibold">Support Love</h3>
              <p className="text-muted-foreground">Every purchase contributes to LGBTQ+ organizations making a difference.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background shadow-lg"
            >
              <PartyPopper className="w-12 h-12 text-[#FFB800]" />
              <h3 className="text-xl font-semibold">Celebrate Pride</h3>
              <p className="text-muted-foreground">Join the biggest Pride celebration in the Netherlands.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background shadow-lg"
            >
              <Users className="w-12 h-12 text-[#00B4D8]" />
              <h3 className="text-xl font-semibold">Unite Together</h3>
              <p className="text-muted-foreground">Be part of a global community celebrating diversity and inclusion.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Official Merchandise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Show your pride with our exclusive collection of Pride 2025 merchandise.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-destructive">{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">No products available.</p>
            </div>
          ) : (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          )}
        </div>
      </section>
    </div>
  );
}