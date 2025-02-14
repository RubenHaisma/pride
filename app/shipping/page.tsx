'use client';

import { motion } from 'framer-motion';
import { Truck, Package, Clock, Globe } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pride-gradient opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 pride-text">Shipping Information</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our shipping policies and delivery times.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border-4 border-foreground bg-background"
            >
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-4">Delivery Methods</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Standard Shipping (3-5 business days)</li>
                <li>Express Shipping (1-2 business days)</li>
                <li>International Shipping (7-14 business days)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border-4 border-foreground bg-background"
            >
              <Package className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-4">Packaging</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Eco-friendly packaging materials</li>
                <li>Secure packaging for fragile items</li>
                <li>Discreet packaging available</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 border-4 border-foreground bg-background"
            >
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-4">Processing Time</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Orders processed within 24 hours</li>
                <li>Same-day shipping for orders before 2 PM</li>
                <li>Order tracking provided via email</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 border-4 border-foreground bg-background"
            >
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-4">International Orders</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Available to most countries</li>
                <li>Customs fees may apply</li>
                <li>International tracking available</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}