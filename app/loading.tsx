'use client';

import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
        <p className="mt-4 text-lg text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}