'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Clock, User2, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { BlogPost } from '@/lib/types';

const blogPosts: BlogPost[] = [
  {
    slug: 'pride-2025-guide',
    title: 'The Ultimate Guide to Pride Amsterdam 2025',
    description: 'Everything you need to know about Pride Amsterdam 2025, from the Canal Parade to street parties and cultural events.',
    content: '...',
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
  {
    slug: 'canal-parade-tips',
    title: '10 Essential Tips for the Canal Parade 2025',
    description: 'Make the most of your Canal Parade experience with these insider tips and tricks.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1533420129452-47fed6d34f52',
    author: {
      name: 'Lucas de Vries',
      role: 'Pride Ambassador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    publishedAt: '2024-03-14',
    category: 'guide',
    tags: ['canal parade', 'tips', 'practical'],
    readingTime: 6
  },
  {
    slug: 'lgbtq-rights-netherlands',
    title: 'LGBTQ+ Rights in the Netherlands: A Historical Perspective',
    description: 'Explore the journey of LGBTQ+ rights in the Netherlands, from the first gay marriage to modern-day activism.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1573331519317-30b24326bb9a',
    author: {
      name: 'Dr. Sarah Johnson',
      role: 'LGBTQ+ Historian',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    publishedAt: '2024-03-13',
    category: 'history',
    tags: ['history', 'rights', 'activism'],
    readingTime: 12
  },
  {
    slug: 'pride-fashion-guide',
    title: 'Pride Fashion Guide 2025: Express Yourself',
    description: 'Discover the latest Pride fashion trends and learn how to create your perfect Pride outfit.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    author: {
      name: 'Alex Wong',
      role: 'Fashion Stylist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    publishedAt: '2024-03-12',
    category: 'culture',
    tags: ['fashion', 'style', 'self-expression'],
    readingTime: 7
  },
  {
    slug: 'pride-impact-community',
    title: 'How Pride Amsterdam Impacts Our Community',
    description: 'Real stories from the LGBTQ+ community about how Pride Amsterdam has changed their lives.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1573331519317-30b24326bb9a',
    author: {
      name: 'Maria Santos',
      role: 'Community Organizer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    },
    publishedAt: '2024-03-11',
    category: 'community',
    tags: ['community', 'impact', 'stories'],
    readingTime: 10
  }
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'guide', label: 'Guides' },
  { value: 'news', label: 'News' },
  { value: 'community', label: 'Community' },
  { value: 'history', label: 'History' },
  { value: 'culture', label: 'Culture' }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ? true : post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-5xl font-bold mb-6 pride-text">Pride Blog</h1>
            <p className="text-xl text-muted-foreground">
              Stories, guides, and insights from the heart of Pride Amsterdam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto flex-1 max-w-sm relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="brutalist-card overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readingTime} min read
                        </span>
                        <span className="inline-flex items-center">
                          <User2 className="w-4 h-4 mr-1" />
                          {post.author.name}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-xs bg-secondary px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
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