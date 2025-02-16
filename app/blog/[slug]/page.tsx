'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User2, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const blogPosts: BlogPost[] = [
  {
    slug: 'pride-2025-guide',
    title: 'The Ultimate Guide to Pride Amsterdam 2025',
    description: 'Everything you need to know about Pride Amsterdam 2025, from the Canal Parade to street parties and cultural events.',
    content: `
      <h2>Welcome to Pride Amsterdam 2025!</h2>
      <p>Pride Amsterdam is one of the world's most unique and spectacular Pride celebrations. Taking place from July 27 to August 4, 2025, this year's edition promises to be bigger and more inclusive than ever before.</p>

      <h3>The Canal Parade: A Floating Celebration</h3>
      <p>The highlight of Pride Amsterdam is undoubtedly the Canal Parade, taking place on August 2, 2025. This unique parade sees 80 decorated boats sailing through Amsterdam's historic canals, each representing different organizations, companies, and communities.</p>

      <h3>Key Events You Can't Miss</h3>
      <ul>
        <li>Pride Walk (July 27) - Join thousands in this powerful demonstration for LGBTQ+ rights</li>
        <li>Pride Park (July 28-31) - Music, food, and community activities in Vondelpark</li>
        <li>Street Parties (August 1-3) - Celebrations throughout Amsterdam's historic center</li>
        <li>Pride Closing Party (August 4) - The grand finale at Dam Square</li>
      </ul>

      <h3>Practical Information</h3>
      <p>Getting around during Pride is easy with public transport, but be prepared for crowds, especially during the Canal Parade. We recommend booking accommodation well in advance as hotels fill up quickly.</p>

      <h3>Supporting the Community</h3>
      <p>Pride Amsterdam is more than just a celebration - it's a statement of solidarity and a platform for LGBTQ+ rights. Consider supporting local LGBTQ+ organizations and businesses during your visit.</p>

      <h3>Safety and Respect</h3>
      <p>While Amsterdam is known for its inclusivity, always be mindful and respectful of others. The city has a zero-tolerance policy for discrimination and harassment.</p>

      <h3>Conclusion</h3>
      <p>Pride Amsterdam 2025 is set to be an unforgettable celebration of love, diversity, and unity. Whether you're part of the LGBTQ+ community or an ally, you're welcome to join this spectacular festival.</p>
    `,
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    author: {
      name: 'Emma van der Berg',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    publishedAt: '2024-03-15',
    category: 'guide',
    tags: ['guide', 'events', 'canal parade'],
    readingTime: 8
  },
  // ... other blog posts
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === params.slug);
    if (!foundPost) {
      router.push('/blog');
      return;
    }
    setPost(foundPost);
  }, [params.slug, router]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      <article>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pride-gradient opacity-10"></div>
          <div className="relative container mx-auto px-4">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </span>
                <span className="inline-flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readingTime} min read
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-xl overflow-hidden border-4 border-foreground">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-sm bg-secondary px-3 py-1 rounded-full"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}