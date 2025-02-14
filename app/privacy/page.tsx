'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Bell, Database, Globe, Scale, FileText, Users } from 'lucide-react';

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
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pride Amsterdam (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pride2025.amsterdam (the &quot;Site&quot;) or use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By accessing or using our Site and services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
                </p>
              </div>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Database className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number, shipping address)</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                  <li>Account credentials</li>
                  <li>Order history and preferences</li>
                  <li>Communications with us</li>
                </ul>

                <h3 className="text-lg font-semibold pt-4">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, interactions)</li>
                  <li>Location data (based on IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
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
              <div className="space-y-4 text-muted-foreground">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send transactional emails and order updates</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Lock className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure data storage with regular backups</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Data Sharing</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers (payment processors, shipping companies)</li>
                  <li>Analytics and advertising partners</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners (with your consent)</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Bell className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Contact Us</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: privacy@pride2025.amsterdam</li>
                  <li>Address: [Your Physical Address]</li>
                  <li>Phone: [Your Phone Number]</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}