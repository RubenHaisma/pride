'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <AlertTriangle className="w-20 h-20 mx-auto text-destructive" />
          <h1 className="text-4xl font-bold">Something went wrong!</h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            {error.message || 'An unexpected error occurred. Please try again.'}
          </p>
          <Button onClick={reset}>Try Again</Button>
        </motion.div>
      </div>
    </div>
  );
}