'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useCart } from '@/context/cart-context';
import { toast } from 'sonner';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  isNewArrival?: boolean;
}

export function ProductCard({ id, title, price, image, description, isNewArrival }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, title, price, image, quantity: 1 });
    toast.success('Added to cart');
  };

  return (
    <Link href={`/shop/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
            />
            {isNewArrival && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-20">
                New Arrival
              </div>
            )}
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription className="text-lg font-bold">{price}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full group" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4 transform group-hover:scale-110 transition-transform" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}