'use client';

import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, PackageCheck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createCheckout } from '@/lib/shopify';
import { toast } from 'sonner';

export function CartSheet() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsCheckingOut(true);
    try {
      // Get the first variant ID and quantity
      // In a real app, you'd want to handle multiple items in the cart
      const variantId = items[0].id;
      const quantity = items[0].quantity;

      const checkout = await createCheckout(variantId, quantity);

      if (checkout.checkoutUserErrors && checkout.checkoutUserErrors.length > 0) {
        throw new Error(checkout.checkoutUserErrors[0].message);
      }

      if (!checkout.checkout?.webUrl) {
        throw new Error('No checkout URL received');
      }

      // Redirect to Shopify checkout
      window.location.href = checkout.checkout.webUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create checkout');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative w-10 h-10 rounded-full hover:bg-secondary transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
            >
              {itemCount}
            </motion.span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="space-y-2.5 pb-6 border-b">
          <SheetTitle className="text-2xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Your Cart
          </SheetTitle>
          {items.length > 0 && (
            <p className="text-sm text-muted-foreground">
              You have {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
            </p>
          )}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          <AnimatePresence mode="popLayout">
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <PackageCheck className="w-12 h-12 text-muted-foreground" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground">
                    Add items to your cart to see them here
                  </p>
                </div>
                <Button asChild variant="outline" className="mt-4">
                  <a href="/shop">Continue Shopping</a>
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: 'spring', bounce: 0.2 }}
                    className="group flex gap-4 items-start p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square w-20 overflow-hidden rounded-md border bg-secondary">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-medium leading-tight truncate pr-4">
                          {item.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                        </Button>
                      </div>
                      <p className="text-sm font-medium text-primary">{item.price}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-6">
            <div className="w-full space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2">
                  <span>Total</span>
                  <span>{total}</span>
                </div>
              </div>
              <Button 
                className="w-full h-12 text-lg font-semibold"
                onClick={handleCheckout}
                disabled={isCheckingOut || items.length === 0}
              >
                {isCheckingOut ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}