'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { useEffect, useState, useRef } from 'react';
import { Loader2, Heart, PartyPopper, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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

    // Interactive cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen cursor-glow">
      {/* Interactive Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 pride-gradient opacity-20"
        />
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-bold pride-text"
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
              <Button
                size="lg"
                className="hover-lift pride-wave text-lg px-8 py-6"
                asChild
              >
                <a href="#shop">Shop Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift text-lg px-8 py-6"
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                color: "text-[#FF1B6B]",
                title: "Support Love",
                description: "Every purchase contributes to LGBTQ+ organizations making a difference."
              },
              {
                icon: PartyPopper,
                color: "text-[#FFB800]",
                title: "Celebrate Pride",
                description: "Join the biggest Pride celebration in the Netherlands."
              },
              {
                icon: Users,
                color: "text-[#00B4D8]",
                title: "Unite Together",
                description: "Be part of a global community celebrating diversity and inclusion."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="card-hover flex flex-col items-center text-center space-y-4 p-8 rounded-lg bg-background shadow-lg"
              >
                <feature.icon className={`w-12 h-12 ${feature.color}`} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Products Section */}
      <section id="shop" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 pride-text">Official Merchandise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Show your pride with our exclusive collection of Pride 2025 merchandise.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
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