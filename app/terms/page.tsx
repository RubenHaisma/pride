'use client';

import { motion } from 'framer-motion';
import { Scale, FileText, AlertCircle, ShieldCheck, Gavel, CreditCard, Truck, RotateCcw, HelpCircle } from 'lucide-react';

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
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {/* Agreement to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Gavel className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using pride2025.amsterdam (&quot;the Site&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Site.
                </p>
                <p>
                  We reserve the right to modify these terms at any time without prior notice. Your continued use of the Site following any changes indicates your acceptance of the modified terms.
                </p>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Pride Amsterdam or its content suppliers and is protected by international copyright laws.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Pride Amsterdam name and logo are registered trademarks</li>
                  <li>Unauthorized use of any materials may violate copyright, trademark, and other laws</li>
                  <li>You may not reproduce, distribute, modify, or create derivative works of our content</li>
                </ul>
              </div>
            </motion.div>

            {/* Products and Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Products and Pricing</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are in euros and include applicable taxes</li>
                  <li>We reserve the right to modify prices at any time</li>
                  <li>Products are subject to availability</li>
                  <li>We do not guarantee that product descriptions or prices are error-free</li>
                  <li>We reserve the right to limit order quantities</li>
                </ul>
              </div>
            </motion.div>

            {/* Shipping and Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Truck className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Shipping and Delivery</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>We are not responsible for delays beyond our control</li>
                  <li>Risk of loss and title pass to you upon delivery</li>
                  <li>You are responsible for providing accurate shipping information</li>
                </ul>
              </div>
            </motion.div>

            {/* Returns and Refunds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <RotateCcw className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Returns and Refunds</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Returns accepted within 14 days of delivery</li>
                  <li>Items must be unused and in original packaging</li>
                  <li>Refunds will be processed within 14 business days</li>
                  <li>Shipping costs for returns are the customer&apos;s responsibility</li>
                  <li>Some items are non-returnable for hygiene reasons</li>
                </ul>
              </div>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Pride Amsterdam shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of or inability to access or use the Site</li>
                  <li>Any conduct or content of any third party on the Site</li>
                  <li>Any content obtained from the Site</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </div>
            </motion.div>

            {/* Dispute Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Dispute Resolution</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Any disputes arising from or relating to these Terms shall be governed by Dutch law and subject to the exclusive jurisdiction of the courts in Amsterdam, Netherlands.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mandatory arbitration for all disputes</li>
                  <li>Class action waiver</li>
                  <li>One-year limitation period for claims</li>
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
                <HelpCircle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Contact Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: info@pride2025.nl</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}