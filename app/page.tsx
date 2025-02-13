'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState('TITLE');
  const [reverse, setReverse] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(sortKey, reverse, searchQuery);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
      setLoading(false);
    };

    loadProducts();
  }, [sortKey, reverse, searchQuery]);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Shop Pride 2025</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of Pride merchandise. Every purchase supports LGBTQ+ organizations.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select
            value={`${sortKey}-${reverse}`}
            onValueChange={(value) => {
              const [key, rev] = value.split('-');
              setSortKey(key);
              setReverse(rev === 'true');
            }}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TITLE-false">Name: A to Z</SelectItem>
              <SelectItem value="TITLE-true">Name: Z to A</SelectItem>
              <SelectItem value="PRICE-false">Price: Low to High</SelectItem>
              <SelectItem value="PRICE-true">Price: High to Low</SelectItem>
              <SelectItem value="BEST_SELLING-true">Best Selling</SelectItem>
              <SelectItem value="CREATED_AT-true">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}