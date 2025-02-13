'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

// This would normally come from Shopify API
const mockProduct = {
  id: '1',
  title: 'Pride 2025 Rainbow Tee',
  price: '€29.99',
  description: 'Limited edition Pride 2025 t-shirt featuring our signature rainbow design. Made from 100% organic cotton, this comfortable and stylish tee is perfect for showing your pride and support.',
  images: [
    'https://images.unsplash.com/photo-1618354691792-d1d42acfd860',
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
  features: [
    '100% Organic Cotton',
    'Gender-neutral fit',
    'Limited Edition Design',
    'Sustainable Production',
  ],
};

export default function ProductDetail({ params }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    addItem({
      id: mockProduct.id,
      title: mockProduct.title,
      price: mockProduct.price,
      image: mockProduct.images[0],
      quantity: 1,
    });
    toast.success('Added to cart');
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square overflow-hidden rounded-lg bg-muted"
          >
            <img
              src={mockProduct.images[selectedImage]}
              alt={mockProduct.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {mockProduct.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden bg-muted ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${mockProduct.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold"
            >
              {mockProduct.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mt-2"
            >
              {mockProduct.price}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">{mockProduct.description}</p>

            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {mockProduct.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-t pt-6 mt-6"
          >
            <h2 className="text-lg font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              {mockProduct.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}