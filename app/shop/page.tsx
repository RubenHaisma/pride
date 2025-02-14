'use client';

import { motion } from 'framer-motion';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { useEffect, useState } from 'react';
import { Loader2, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Script from 'next/script';
import { generateEventSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

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
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateEventSchema()),
        }}
      />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pride-gradient opacity-10"></div>
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl font-bold mb-6 pride-text">Pride Shop</h1>
              <p className="text-xl text-muted-foreground">
                Discover our exclusive collection of Pride merchandise and show your support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <form onSubmit={handleSearch} className="w-full md:w-auto flex-1 max-w-sm">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="title">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="best-selling">Best Selling</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <p className="text-destructive">{error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <p className="text-muted-foreground">No products found.</p>
                {searchQuery && (
                  <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                )}
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
      </div>
    </>
  );
}