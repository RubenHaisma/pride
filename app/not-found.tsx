'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Heart className="w-20 h-20 mx-auto text-primary" />
          <h1 className="text-4xl font-bold pride-text">Page Not Found</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on track!
          </p>
          <Button asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}