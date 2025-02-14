'use client';

import { motion } from 'framer-motion';
import { Heart, Globe, Users2, Calendar, MapPin, Mail, Sparkles, Star, Award } from 'lucide-react';

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

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Pride Amsterdam&apos;s journey began in 1996, born from a deep desire to celebrate love in all its forms and create a safe space for the LGBTQ+ community. What started as a small gathering has blossomed into one of Europe&apos;s most vibrant and inclusive Pride celebrations.
                </p>
                <p>
                  Our iconic canal parade, a unique feature of Pride Amsterdam, symbolizes the fluid nature of love and identity, while paying homage to our city&apos;s rich maritime heritage. Each year, we transform Amsterdam&apos;s historic waterways into rivers of rainbow colors, music, and joy.
                </p>
                <p>
                  But Pride Amsterdam is more than just a celebration. It&apos;s a testament to decades of progress in LGBTQ+ rights, a memorial to those who fought for equality, and a beacon of hope for future generations. Our story is one of resilience, community, and unwavering commitment to creating a world where everyone can love freely and authentically.
                </p>
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

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Pride Amsterdam stands as a beacon of hope and celebration for the LGBTQ+ community.
                Our mission is to promote equality, increase visibility, and celebrate the diversity
                that makes our community unique and beautiful.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Heart className="w-12 h-12 text-[#FF1B6B]" />
                <h3 className="text-xl font-semibold">Promote Acceptance</h3>
                <p className="text-muted-foreground">
                  We work tirelessly to foster understanding and acceptance of LGBTQ+ individuals in all aspects of society, from workplaces to families.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <Globe className="w-12 h-12 text-[#00B4D8]" />
                <h3 className="text-xl font-semibold">Global Impact</h3>
                <p className="text-muted-foreground">
                  Through international partnerships and advocacy, we extend our message of love and acceptance beyond Amsterdam&apos;s canals to communities worldwide.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <Users2 className="w-12 h-12 text-[#FFB800]" />
                <h3 className="text-xl font-semibold">Community Support</h3>
                <p className="text-muted-foreground">
                  We provide resources, safe spaces, and support networks for LGBTQ+ individuals, ensuring no one has to navigate their journey alone.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 25 years, Pride Amsterdam has been at the forefront of LGBTQ+ advocacy and celebration,
              creating lasting change in our community and beyond.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-background rounded-xl shadow-lg"
            >
              <Sparkles className="w-12 h-12 text-[#FF1B6B] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Cultural Change</h3>
              <p className="text-muted-foreground">
                We&apos;ve helped shape Amsterdam into one of the world&apos;s most LGBTQ+-friendly cities, influencing policies and changing hearts and minds.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-background rounded-xl shadow-lg"
            >
              <Star className="w-12 h-12 text-[#00B4D8] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Youth Support</h3>
              <p className="text-muted-foreground">
                Our youth programs and mentorship initiatives have supported thousands of young LGBTQ+ individuals in embracing their authentic selves.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-background rounded-xl shadow-lg"
            >
              <Award className="w-12 h-12 text-[#FFB800] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Global Recognition</h3>
              <p className="text-muted-foreground">
                Pride Amsterdam has become a model for Pride celebrations worldwide, inspiring other cities to create their own inclusive celebrations.
              </p>
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
              <p className="text-muted-foreground">info@pride2025.nl</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}