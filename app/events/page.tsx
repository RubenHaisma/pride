'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { format } from 'date-fns';
import { 
  Calendar, 
  MapPin, 
  Filter,
  Search,
  PartyPopper,
  Users,
  Palette,
  GraduationCap
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PrideEvent, City } from '@/lib/types';

// Pride events data from various cities
const prideEvents: PrideEvent[] = [
  {
    id: '1',
    title: 'Amsterdam Pride Canal Parade',
    description: "The world-famous canal parade through Amsterdam's historic canals featuring 80 boats celebrating love and diversity.",
    city: 'Amsterdam',
    venue: 'Amsterdam Canals',
    startDate: '2024-08-03',
    endDate: '2024-08-03',
    time: '12:00 - 18:00',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    ticketUrl: 'https://pride.amsterdam/tickets',
    organizer: 'Pride Amsterdam',
    website: 'https://pride.amsterdam',
    category: 'parade',
    tags: ['canal parade', 'boats', 'celebration']
  },
  {
    id: '2',
    title: 'Rotterdam Pride Festival',
    description: 'A week-long celebration of LGBTQ+ culture featuring art exhibitions, performances, and community events.',
    city: 'Rotterdam',
    venue: 'Various locations',
    startDate: '2024-09-20',
    endDate: '2024-09-28',
    time: 'Various times',
    image: 'https://images.unsplash.com/photo-1596473537047-aae2920f5563',
    organizer: 'Rotterdam Pride',
    website: 'https://rotterdampride.com',
    category: 'cultural',
    tags: ['festival', 'art', 'culture']
  },
  {
    id: '3',
    title: 'Utrecht Pride Walk',
    description: 'Join the colorful pride walk through the historic city center of Utrecht.',
    city: 'Utrecht',
    venue: 'Utrecht City Center',
    startDate: '2024-06-15',
    endDate: '2024-06-15',
    time: '13:00 - 16:00',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77',
    organizer: 'Utrecht Pride',
    website: 'https://utrechtpride.nl',
    category: 'parade',
    tags: ['pride walk', 'demonstration']
  },
  {
    id: '4',
    title: 'Queer Arts Festival Groningen',
    description: 'A celebration of LGBTQ+ artists featuring exhibitions, performances, and workshops.',
    city: 'Groningen',
    venue: 'Forum Groningen',
    startDate: '2024-07-10',
    endDate: '2024-07-14',
    time: '10:00 - 22:00',
    image: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72',
    organizer: 'Groningen Pride',
    website: 'https://groningenpride.nl',
    category: 'cultural',
    tags: ['arts', 'exhibition', 'performance']
  },
  {
    id: '5',
    title: 'Pride Eindhoven Street Party',
    description: 'The biggest LGBTQ+ street party in the south of Netherlands with live music and performances.',
    city: 'Eindhoven',
    venue: 'Stratumseind',
    startDate: '2024-06-08',
    endDate: '2024-06-08',
    time: '14:00 - 23:00',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    organizer: 'Pride Eindhoven',
    website: 'https://prideeindhoven.nl',
    category: 'party',
    tags: ['party', 'music', 'performance']
  }
];

const cities: City[] = [
  {
    name: 'Amsterdam',
    slug: 'amsterdam',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description: 'Home to one of the world\'s most famous Pride celebrations',
    image: 'https://images.unsplash.com/photo-1584003564911-a5a9d59b00dd'
  },
  {
    name: 'Rotterdam',
    slug: 'rotterdam',
    coordinates: { lat: 51.9244, lng: 4.4777 },
    description: 'A modern celebration of diversity and inclusion',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5'
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    coordinates: { lat: 52.0907, lng: 5.1214 },
    description: 'Historic city with a vibrant LGBTQ+ community',
    image: 'https://images.unsplash.com/photo-1558551649-e44c8f992010'
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    coordinates: { lat: 53.2194, lng: 6.5665 },
    description: 'Student city with progressive Pride celebrations',
    image: 'https://images.unsplash.com/photo-1558882424-680ab6c3b31b'
  },
  {
    name: 'Eindhoven',
    slug: 'eindhoven',
    coordinates: { lat: 51.4416, lng: 5.4697 },
    description: 'Technology hub with inclusive Pride events',
    image: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f'
  }
];

const categories = [
  { value: 'parade', label: 'Parades', icon: Users },
  { value: 'party', label: 'Parties', icon: PartyPopper },
  { value: 'cultural', label: 'Cultural Events', icon: Palette },
  { value: 'workshop', label: 'Workshops', icon: GraduationCap }
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredEvents = prideEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'all' ? true : event.city === selectedCity;
    const matchesCategory = selectedCategory === 'all' ? true : event.category === selectedCategory;
    
    return matchesSearch && matchesCity && matchesCategory;
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
            <h1 className="text-5xl font-bold mb-6 pride-text">Pride Events</h1>
            <p className="text-xl text-muted-foreground">
              Discover Pride celebrations across the Netherlands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden brutalist-card"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                    <p className="text-white/80">{city.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-auto flex-1 max-w-sm relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city.slug} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="brutalist-card overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{event.description}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(event.startDate), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}, {event.city}</span>
                    </div>
                  </div>
                  {event.ticketUrl && (
                    <Button className="w-full" asChild>
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        Get Tickets
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}