'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CelebratingLGBTQHistoryPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Celebrating LGBTQ+ History: From Stonewall to Amsterdam Pride',
            description: 'Explore the rich history of the LGBTQ+ movement, from the Stonewall riots to Amsterdam\'s vibrant Pride celebrations. Learn about key historical moments and their impact on today\'s Pride events.',
            image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
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
              '@id': 'https://pride2025.nl/blog/celebrating-lgbtq-history'
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
                Celebrating LGBTQ+ History: From Stonewall to Amsterdam Pride
              </h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Pride Amsterdam Team</span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1561612217-e5147162fd31"
                alt="Pride celebration with rainbow flags"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>The Birth of Pride: Stonewall and Beyond</h2>
              <p>
                The modern LGBTQ+ rights movement as we know it today was catalyzed by the historic Stonewall riots of 1969. 
                What began as a resistance against police raids at the Stonewall Inn in New York City became a symbol of 
                liberation and the birthplace of Pride celebrations worldwide.
              </p>

              <h2>Amsterdam&apos;s Progressive Legacy</h2>
              <p>
                The Netherlands has long been at the forefront of LGBTQ+ rights, becoming the first country to legalize 
                same-sex marriage in 2001. Amsterdam&apos;s Pride celebration, with its unique canal parade, has evolved into 
                one of the world&apos;s most iconic Pride events, attracting over 500,000 visitors annually.
              </p>

              <h2>Key Milestones in LGBTQ+ Rights</h2>
              <ul>
                <li>1969: Stonewall Riots spark the modern LGBTQ+ rights movement</li>
                <li>1987: First Amsterdam Pride celebration</li>
                <li>2001: Netherlands legalizes same-sex marriage</li>
                <li>2013: Introduction of the iconic Canal Parade format</li>
                <li>2025: Anticipated largest Pride celebration in Amsterdam&apos;s history</li>
              </ul>

              <h2>Pride Amsterdam 2025: A Historic Celebration</h2>
              <p>
                As we approach Pride Amsterdam 2025, we&apos;re preparing for our most inclusive and expansive celebration yet. 
                This year&apos;s event will feature over 80 boats in the Canal Parade, hundreds of cultural events, and a special 
                focus on intergenerational dialogue within the LGBTQ+ community.
              </p>

              <h2>Join the Celebration</h2>
              <p>
                Pride Amsterdam 2025 isn&apos;t just an event - it&apos;s a testament to decades of progress and a beacon of hope 
                for the future. Whether you&apos;re part of the LGBTQ+ community or an ally, we invite you to join us in this 
                historic celebration of love, diversity, and unity.
              </p>

              <div className="bg-secondary p-6 rounded-lg my-8">
                <h3>Key Dates for Pride Amsterdam 2025</h3>
                <ul>
                  <li>July 27: Opening Ceremony and Pride Walk</li>
                  <li>July 28-August 3: Cultural Program</li>
                  <li>August 2: Canal Parade</li>
                  <li>August 4: Closing Party</li>
                </ul>
              </div>

              <p>
                Don&apos;t miss out on being part of history. Mark your calendars and join us for Pride Amsterdam 2025, 
                where we&apos;ll continue the legacy of those who paved the way for LGBTQ+ rights and celebration.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}