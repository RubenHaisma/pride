'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types';

const blogPosts: BlogPost[] = [
  {
    slug: 'celebrating-lgbtq-history',
    title: 'Celebrating LGBTQ+ History: From Stonewall to Amsterdam Pride',
    description: 'Explore the rich history of the LGBTQ+ movement, from the Stonewall riots to Amsterdam\'s vibrant Pride celebrations.',
    content: '',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    author: {
      name: 'Pride Amsterdam Team',
      role: 'Historical Research',
      image: '/team/historian.jpg'
    },
    publishedAt: '2024-03-15',
    category: 'history',
    tags: ['history', 'stonewall', 'pride', 'amsterdam'],
    readingTime: 8
  },
  {
    slug: 'guide-to-the-best-pride',
    title: 'Your Ultimate Guide to the Best Pride Experience in Amsterdam',
    description: 'Discover insider tips, must-visit locations, and essential information for making the most of your Pride Amsterdam 2025 experience.',
    content: '',
    image: 'https://images.unsplash.com/photo-1533420129452-47fed6d34f52',
    author: {
      name: 'Pride Amsterdam Team',
      role: 'Event Planning',
      image: '/team/planner.jpg'
    },
    publishedAt: '2024-03-15',
    category: 'guide',
    tags: ['guide', 'tips', 'events', 'planning'],
    readingTime: 10
  },
  {
    slug: 'pride-2025-guide',
    title: 'Pride Amsterdam 2025: Complete Event Guide and Schedule',
    description: 'Your comprehensive guide to Pride Amsterdam 2025. Find detailed event schedules, venue information, and everything you need to know.',
    content: '',
    image: 'https://images.unsplash.com/photo-1573331519317-30b24326bb9a',
    author: {
      name: 'Pride Amsterdam Team',
      role: 'Program Director',
      image: '/team/director.jpg'
    },
    publishedAt: '2024-03-15',
    category: 'guide',
    tags: ['schedule', 'events', 'program', 'guide'],
    readingTime: 12
  },
  {
    slug: 'queer-art-revolution',
    title: 'The Queer Art Revolution: LGBTQ+ Artists Shaping Pride 2025',
    description: 'Discover how LGBTQ+ artists are transforming Pride Amsterdam 2025 through innovative art installations, performances, and cultural events.',
    content: '',
    image: 'https://images.unsplash.com/photo-1607075636137-1c11b399ca21',
    author: {
      name: 'Pride Amsterdam Team',
      role: 'Arts Curator',
      image: '/team/curator.jpg'
    },
    publishedAt: '2024-03-15',
    category: 'culture',
    tags: ['art', 'culture', 'artists', 'exhibitions'],
    readingTime: 9
  },
  {
    slug: 'youth-voices',
    title: 'Youth Voices: The Next Generation of LGBTQ+ Leaders',
    description: 'Meet the young LGBTQ+ activists and leaders shaping the future of Pride Amsterdam. Discover their stories, initiatives, and vision.',
    content: '',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3',
    author: {
      name: 'Pride Amsterdam Team',
      role: 'Youth Coordinator',
      image: '/team/coordinator.jpg'
    },
    publishedAt: '2024-03-15',
    category: 'community',
    tags: ['youth', 'activism', 'future', 'leadership'],
    readingTime: 11
  }
];

export default function BlogPage() {
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
            <h1 className="text-5xl font-bold mb-6 pride-text">Pride Blog</h1>
            <p className="text-xl text-muted-foreground">
              Stories, guides, and insights from Pride Amsterdam 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="blog-card">
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="space-y-4">
                        <div className="blog-meta">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishedAt}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
                          <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="blog-tag">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{post.author.name}</span>
                          <span className="text-sm text-muted-foreground">{post.author.role}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}