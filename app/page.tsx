'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';

const featuredProducts = [
  {
    id: '1',
    title: "Pride 2025 Rainbow Tee",
    price: "€29.99",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860",
    description: "Limited edition Pride 2025 t-shirt featuring our signature rainbow design.",
    isNewArrival: true
  },
  {
    id: '2',
    title: "Unity Collection Hoodie",
    price: "€59.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Comfortable and stylish hoodie celebrating unity and diversity.",
    isNewArrival: true
  },
  {
    id: '3',
    title: "Pride Flag",
    price: "€24.99",
    image: "https://images.unsplash.com/photo-1561612217-e5147162fd31",
    description: "High-quality pride flag perfect for celebrations and showing your support.",
    isNewArrival: false
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516575334481-f85287c2c82d')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            PRIDE 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Celebrate Love, Unity & Pride
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-all"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Heart className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Collection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Join Our Community</h2>
            <p className="text-muted-foreground">
              Subscribe to get updates about new products, exclusive offers, and Pride 2025 events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}