'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Grid } from '@/components/grid';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/shopify';
import { Product } from '@/lib/shopify/types';
import { useEffect, useState, useRef } from 'react';
import { Heart, PartyPopper, Users, ArrowDown, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Smooth cursor movement
  const cursorX = useSpring(0, { stiffness: 100, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 100, damping: 20 });

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

    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen relative">
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] morphing-blob"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] morphing-blob"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="absolute inset-0 grid-bg"></div>

        <motion.div 
          style={{ y, opacity }}
          className="relative h-full flex items-center justify-center px-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 flex justify-center"
            >
              <Sparkles className="w-16 h-16 text-neon-pink" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-9xl font-bold glitch-text neon-text mb-8"
            >
              Pride 2025
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl glass p-6 rounded-2xl max-w-3xl mx-auto mb-12"
            >
              Experience the future of celebration at Amsterdam&apos;s most innovative Pride festival
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Button
                size="lg"
                className="liquid-button text-lg px-8 py-6 prismatic-border"
                asChild
              >
                <a href="#shop">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 holographic"
                asChild
              >
                <a href="#about">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-10 w-10 neon-text" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Embrace Love",
                description: "Celebrate diversity and acceptance in our vibrant community",
                color: "from-neon-pink to-neon-purple"
              },
              {
                icon: PartyPopper,
                title: "Join the Party",
                description: "Experience Amsterdam's biggest and most innovative Pride celebration",
                color: "from-neon-blue to-neon-green"
              },
              {
                icon: Users,
                title: "Unite Together",
                description: "Connect with like-minded people from around the world",
                color: "from-neon-green to-neon-yellow"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="magnetic-hover glass p-8 rounded-2xl"
              >
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="shop" className="py-32 relative">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold neon-text mb-6">Official Collection</h2>
            <p className="text-xl glass p-4 rounded-xl max-w-2xl mx-auto">
              Show your pride with our exclusive merchandise, designed for the future of celebration
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="loading-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
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