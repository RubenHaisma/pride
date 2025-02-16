'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GuideToBestPridePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Your Ultimate Guide to the Best Pride Experience in Amsterdam',
            description: 'Discover insider tips, must-visit locations, and essential information for making the most of your Pride Amsterdam 2025 experience. From parade viewing spots to local recommendations.',
            image: 'https://images.unsplash.com/photo-1533420129452-47fed6d34f52',
            datePublished: '2024-03-15',
            dateModified: '2024-03-15',
            author: {
              '@type': 'Person',
              name: 'Pride Amsterdam Team'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pride Amsterdam',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pride2025.nl/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pride2025.nl/blog/guide-to-the-best-pride'
            }
          })
        }}
      />
      
      <div className="min-h-screen pt-16">
        <div className="container max-w-4xl px-4 py-12">
          <Button
            variant="ghost"
            className="mb-8"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black">
                Your Ultimate Guide to the Best Pride Experience in Amsterdam
              </h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Pride Amsterdam Team</span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1533420129452-47fed6d34f52"
                alt="Amsterdam Canal Pride celebration"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Planning Your Pride Amsterdam 2025 Experience</h2>
              <p>
                Pride Amsterdam is one of the world&apos;s most unique Pride celebrations, featuring the iconic Canal Parade 
                through Amsterdam&lsquo;s historic waterways. This comprehensive guide will help you make the most of your 
                Pride experience in 2025.
              </p>

              <h2>Best Viewing Spots for the Canal Parade</h2>
              <p>
                The Canal Parade is the highlight of Pride Amsterdam. Here are the prime viewing locations:
              </p>
              <ul>
                <li>Prinsengracht near Westerkerk - Perfect for photos with the iconic church backdrop</li>
                <li>Magere Brug (Skinny Bridge) - Elevated views of boats approaching</li>
                <li>Amstel River banks - Spacious viewing areas with festival atmosphere</li>
                <li>Nieuwe Herengracht - Less crowded with great photo opportunities</li>
              </ul>

              <div className="bg-secondary p-6 rounded-lg my-8">
                <h3>Pro Tips for Canal Parade Viewing</h3>
                <ul>
                  <li>Arrive at least 2 hours early for prime spots</li>
                  <li>Bring water and snacks</li>
                  <li>Consider booking a spot at canalside restaurants</li>
                  <li>Pack rain gear - Dutch weather is unpredictable!</li>
                </ul>
              </div>

              <h2>Must-Attend Pride Events</h2>
              <p>
                Beyond the Canal Parade, Pride Amsterdam 2025 offers a rich program of events:
              </p>
              <ul>
                <li>Pride Walk - Join thousands in this powerful demonstration</li>
                <li>Pride Park - Family-friendly festivities in Vondelpark</li>
                <li>Pride Beach - Beachside celebrations at Zandvoort</li>
                <li>Cultural Programs - Art exhibitions, film screenings, and performances</li>
                <li>Street Parties - Various locations throughout the city</li>
              </ul>

              <h2>Where to Stay</h2>
              <p>
                Book your accommodation early! Here are our recommended areas:
              </p>
              <ul>
                <li>Canal Belt - Heart of Pride activities but books up fast</li>
                <li>Jordaan - Charming neighborhood walking distance to events</li>
                <li>De Pijp - Vibrant area with great nightlife</li>
                <li>Oud-West - More affordable with good transport links</li>
              </ul>

              <h2>LGBTQ+ Friendly Venues</h2>
              <p>
                Amsterdam&apos;s LGBTQ+ scene comes alive during Pride. Don&apos;t miss these venues:
              </p>
              <ul>
                <li>Reguliersdwarsstraat - The city&apos;s main LGBTQ+ street</li>
                <li>Café &apos;t Mandje - Historic LGBTQ+ bar since 1927</li>
                <li>Prik - Popular bar with great atmosphere</li>
                <li>NYX - Multi-floor club with diverse crowds</li>
              </ul>

              <h2>Transportation Tips</h2>
              <p>
                Navigate Pride Amsterdam like a pro:
              </p>
              <ul>
                <li>Get a multi-day public transport ticket</li>
                <li>Consider renting a bike for flexibility</li>
                <li>Download the GVB app for real-time transport info</li>
                <li>Book Pride-specific shuttle services</li>
              </ul>

              <h2>Making the Most of Your Pride Experience</h2>
              <p>
                Pride Amsterdam is more than just a celebration - it&apos;s a chance to be part of a historic movement. 
                Whether you&apos;re attending your first Pride or you&apos;re a seasoned participant, 2025 promises to be an 
                unforgettable experience.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3>Quick Links for Pride 2025</h3>
                <ul>
                  <li><Link href="/events">Official Event Schedule</Link></li>
                  <li><Link href="/shop">Pride Merchandise</Link></li>
                  <li><Link href="/contact">Contact Information</Link></li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}