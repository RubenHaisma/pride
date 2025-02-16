'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function YouthVoicesPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Youth Voices: The Next Generation of LGBTQ+ Leaders',
            description: 'Meet the young LGBTQ+ activists and leaders shaping the future of Pride Amsterdam. Discover their stories, initiatives, and vision for a more inclusive future.',
            image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3',
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
              '@id': 'https://pride2025.nl/blog/youth-voices'
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
                Youth Voices: The Next Generation of LGBTQ+ Leaders
              </h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>11 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Pride Amsterdam Team</span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3"
                alt="Young LGBTQ+ activists"
                className="w-full aspect-video object-cover rounded-xl"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>Empowering the Next Generation</h2>
              <p>
                Pride Amsterdam 2025 puts a special focus on youth voices and leadership. Meet the young activists, 
                artists, and organizers who are shaping the future of the LGBTQ+ movement in the Netherlands and beyond.
              </p>

              <div className="bg-secondary p-6 rounded-lg my-8">
                <h3>Youth Pride Program Highlights</h3>
                <ul>
                  <li>Youth Leadership Summit - July 28</li>
                  <li>Next Gen Speaker Series</li>
                  <li>Youth Art Exhibition</li>
                  <li>Student Pride Parade Float</li>
                </ul>
              </div>

              <h2>Meet Our Youth Ambassadors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3>Sophie van der Berg, 19</h3>
                  <p>
                    Climate activist and LGBTQ+ rights advocate leading the intersection of environmental and queer activism.
                  </p>
                  <p className="text-sm mt-2">
                    &quot;We&lsquo;re fighting for a future that&lsquo;s both sustainable and inclusive. These struggles are interconnected.&quot;
                  </p>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3>Malik Ahmed, 21</h3>
                  <p>
                    Digital creator and founder of &ldquo;Queer Muslim Youth Network,&quot; bridging cultural and LGBTQ+ identities.
                  </p>
                  <p className="text-sm mt-2">
                    &quot;Our intersectional identities are our strength. We&apos;re creating spaces where all parts of ourselves are celebrated.&quot;
                  </p>
                </div>
              </div>

              <h2>Youth-Led Initiatives</h2>
              <p>
                Pride Amsterdam 2025 features several youth-driven programs:
              </p>
              <ul>
                <li>GSA (Gender & Sexuality Alliance) Network
                  <ul>
                    <li>School outreach programs</li>
                    <li>Peer support networks</li>
                    <li>Educational resources</li>
                  </ul>
                </li>
                <li>Digital Activism Workshop Series
                  <ul>
                    <li>Social media advocacy</li>
                    <li>Content creation</li>
                    <li>Online community building</li>
                  </ul>
                </li>
                <li>Youth Mental Health Support
                  <ul>
                    <li>Peer counseling</li>
                    <li>Support groups</li>
                    <li>Professional resources</li>
                  </ul>
                </li>
              </ul>

              <h2>Education and Empowerment</h2>
              <p>
                Our youth program focuses on building leadership skills and knowledge:
              </p>
              <ul>
                <li>LGBTQ+ History Workshops</li>
                <li>Leadership Development Training</li>
                <li>Public Speaking Courses</li>
                <li>Project Management Skills</li>
              </ul>

              <div className="bg-secondary p-6 rounded-lg my-8">
                <h3>Youth Summit 2025</h3>
                <p>
                  A three-day conference by and for LGBTQ+ youth, featuring:
                </p>
                <ul>
                  <li>Keynote speeches by young leaders</li>
                  <li>Workshop sessions</li>
                  <li>Networking opportunities</li>
                  <li>Cultural performances</li>
                </ul>
              </div>

              <h2>Digital Innovation</h2>
              <p>
                Young leaders are revolutionizing LGBTQ+ activism through technology:
              </p>
              <ul>
                <li>Pride Youth App Development</li>
                <li>Online Support Communities</li>
                <li>Virtual Reality Safe Spaces</li>
                <li>Social Media Campaigns</li>
              </ul>

              <h2>Creative Expression</h2>
              <p>
                Youth artistic programs during Pride 2025:
              </p>
              <ul>
                <li>Youth Film Festival</li>
                <li>Poetry and Spoken Word Events</li>
                <li>Dance Performances</li>
                <li>Music Showcases</li>
              </ul>

              <h2>International Youth Network</h2>
              <p>
                Pride Amsterdam 2025 connects young LGBTQ+ leaders globally:
              </p>
              <ul>
                <li>International Youth Exchange Program</li>
                <li>Global Youth Ambassador Network</li>
                <li>Cross-Cultural Projects</li>
                <li>Online Global Forums</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3>Get Involved: Youth Opportunities</h3>
                <p>
                  Ways for young people to participate in Pride Amsterdam 2025:
                </p>
                <ul>
                  <li>Youth Committee Membership</li>
                  <li>Volunteer Programs</li>
                  <li>Youth Ambassador Applications</li>
                  <li>Project Leadership Roles</li>
                </ul>
                <Button asChild className="mt-4">
                  <Link href="/contact">Join the Movement</Link>
                </Button>
              </div>

              <h2>Looking to the Future</h2>
              <p>
                The youth voices of Pride Amsterdam 2025 represent the future of the LGBTQ+ movement. Their vision, 
                creativity, and dedication are creating new pathways for acceptance, understanding, and celebration of 
                diverse identities.
              </p>

              <p>
                Join us in supporting and amplifying these young voices as they lead us toward a more inclusive and 
                equitable future. Pride Amsterdam 2025 is more than an event - it&apos;s a platform for the next generation 
                of LGBTQ+ leaders to shine.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}