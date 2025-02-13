'use client';

import { motion } from 'framer-motion';
import { Heart, Globe, Users2, Calendar, MapPin, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pride-gradient opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 pride-text">About Pride Amsterdam</h1>
            <p className="text-xl text-muted-foreground">
              Celebrating love, diversity, and unity in the heart of Amsterdam since 1996.
              Join us for Pride 2025 as we continue to make history.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                Pride Amsterdam stands as a beacon of hope and celebration for the LGBTQ+ community.
                Our mission is to promote equality, increase visibility, and celebrate the diversity
                that makes our community unique and beautiful.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#FF1B6B] mt-1" />
                  <div>
                    <h3 className="font-semibold">Promote Acceptance</h3>
                    <p className="text-muted-foreground">Creating a world where everyone can be themselves</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-[#00B4D8] mt-1" />
                  <div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-muted-foreground">Inspiring change and acceptance worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users2 className="w-6 h-6 text-[#FFB800] mt-1" />
                  <div>
                    <h3 className="font-semibold">Community Support</h3>
                    <p className="text-muted-foreground">Building stronger connections within our community</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1561612217-e5147162fd31"
                alt="Pride celebration"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Pride 2025 Event Details
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border shadow-lg"
            >
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dates</h3>
              <p className="text-muted-foreground">July 27 - August 4, 2025</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-card border shadow-lg"
            >
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Amsterdam City Center</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-card border shadow-lg"
            >
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">info@pride2025.amsterdam</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}