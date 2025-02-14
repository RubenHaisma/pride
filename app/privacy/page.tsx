'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

export default function PrivacyPage() {
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
            <h1 className="text-5xl font-bold mb-6 pride-text">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Data Protection</h2>
              </div>
              <p className="text-muted-foreground">
                We take the protection of your personal data seriously and handle it in accordance with data protection laws. Your information is stored securely and is only used for the purposes outlined in this policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Lock className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Website usage data and cookies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Eye className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}