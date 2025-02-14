'use client';

import { motion } from 'framer-motion';
import { Scale, FileText, AlertCircle } from 'lucide-react';

export default function TermsPage() {
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
            <h1 className="text-5xl font-bold mb-6 pride-text">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">General Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and placing an order with Pride 2025, you confirm that you are in agreement with and bound by the terms and conditions contained here.
                </p>
                <p>
                  These terms apply to the entire website and any email or other type of communication between you and Pride 2025.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Orders and Payments</h2>
              </div>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>All orders are subject to availability and confirmation of the order price</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be received in full before orders are shipped</li>
                <li>We accept major credit cards and other payment methods as indicated at checkout</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Disclaimer</h2>
              </div>
              <p className="text-muted-foreground">
                Pride 2025 reserves the right to modify these terms at any time without prior notice. Your continued use of the website after any changes indicates your acceptance of the modified terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}