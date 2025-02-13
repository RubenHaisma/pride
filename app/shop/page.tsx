'use client';

import { motion } from 'framer-motion';
import { ProductCard } from '@/components/product-card';

const products = [
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
  },
  {
    id: '4',
    title: "Love Wins Tank Top",
    price: "€24.99",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    description: "Sleeveless tank top with our iconic Love Wins design.",
    isNewArrival: false
  },
  {
    id: '5',
    title: "Rainbow Socks",
    price: "€12.99",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82",
    description: "Colorful pride socks made from premium cotton blend.",
    isNewArrival: false
  },
  {
    id: '6',
    title: "Pride 2025 Cap",
    price: "€19.99",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    description: "Adjustable cap featuring the Pride 2025 logo.",
    isNewArrival: true
  }
];

export default function ShopPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}