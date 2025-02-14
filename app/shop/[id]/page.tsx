'use client';

import { useState, useEffect } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProduct, createCheckout } from '@/lib/shopify';
import { Loader2 } from 'lucide-react';
import { generateProductSchema } from '@/lib/schema';
import Script from 'next/script';

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProduct(params.id);
        setProduct(data);
        if (data && data.variants.length > 0) {
          setSelectedVariant(data.variants[0].id);
        }
      } catch (error) {
        console.error('Error loading product:', error);
        toast.error('Error loading product details');
      }
      setLoading(false);
    };

    loadProduct();
  }, [params.id]);

  const handleAddToCart = async () => {
    if (!selectedVariant) {
      toast.error('Please select a variant');
      return;
    }

    if (!product || !product.images || product.images.length === 0) {
      toast.error('Product data is not fully loaded');
      return;
    }

    addItem({
      id: product.id,
      title: product.title,
      price: `${product.priceRange.minVariantPrice.amount} ${product.priceRange.minVariantPrice.currencyCode}`,
      image: product.images[0].url,
      quantity: 1,
    });
    toast.success('Added to cart');
  };

  const handleBuyNow = async () => {
    if (!selectedVariant) {
      toast.error('Please select a variant');
      return;
    }

    try {
      const checkout = await createCheckout(selectedVariant, 1);
      if (checkout.checkoutUserErrors.length > 0) {
        toast.error(checkout.checkoutUserErrors[0].message);
        return;
      }
      window.location.href = checkout.checkout.webUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast.error('Error processing checkout');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!product || !product.images || product.images.length === 0) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p>Product not found or has no images</p>
      </div>
    );
  }

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square overflow-hidden rounded-lg bg-muted"
            >
              {product.images[selectedImage] && (
                <img
                  src={product.images[selectedImage].url}
                  alt={product.images[selectedImage].altText || product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
            <div className="grid grid-cols-5 gap-4">
              {product.images.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-muted ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.altText || `${product.title} - Image ${index + 1}`}
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
                {product.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 mt-2"
              >
                <span className="text-2xl font-bold ml-auto">
                  {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground">{product.description}</p>

              <div className="space-y-2">
                <label className="text-sm font-medium">Variant</label>
                <Select
                  value={selectedVariant}
                  onValueChange={setSelectedVariant}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.variants.map((variant: any) => (
                      <SelectItem
                        key={variant.id}
                        value={variant.id}
                        disabled={!variant.availableForSale}
                      >
                        {variant.title} - {variant.price.amount} {variant.price.currencyCode}
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
                <Button
                  size="lg"
                  variant="secondary"
                  className="flex-1"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="description">Description</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}