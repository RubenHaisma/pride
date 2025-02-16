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
  // Amsterdam Events
  {
    id: '1',
    title: 'Pride Amsterdam Canal Parade 2025',
    description: "The world-famous canal parade returns for its 30th anniversary! Join over 80 boats and hundreds of thousands of spectators for Amsterdam's most colorful celebration.",
    city: 'Amsterdam',
    venue: 'Amsterdam Canals',
    startDate: '2025-08-02',
    endDate: '2025-08-02',
    time: '12:30 - 17:30',
    image: 'https://images.unsplash.com/photo-1533420129452-47fed6d34f52',
    ticketUrl: 'https://pride.amsterdam/',
    organizer: 'Pride Amsterdam Foundation',
    website: 'https://pride.amsterdam',
    category: 'parade',
    tags: ['canal parade', 'boats', 'celebration', 'anniversary']
  },
  {
    id: '2',
    title: 'Pride Walk 2025',
    description: 'Join thousands in this powerful demonstration for LGBTQ+ rights, starting from Dam Square and walking through historic Amsterdam.',
    city: 'Amsterdam',
    venue: 'Dam Square',
    startDate: '2025-07-27',
    endDate: '2025-07-27',
    time: '11:00 - 13:00',
    image: 'https://images.unsplash.com/photo-1573331519317-30b24326bb9a',
    ticketUrl: 'https://pride.amsterdam/',
    organizer: 'Pride Amsterdam Foundation',
    website: 'https://pride.amsterdam',
    category: 'parade',
    tags: ['demonstration', 'march', 'activism']
  },
  // Rotterdam Events
  {
    id: '3',
    title: 'Rotterdam Pride Festival 2025',
    description: 'A week-long celebration of LGBTQ+ culture in Rotterdam featuring art installations, performances, and community events throughout the city.',
    city: 'Rotterdam',
    venue: 'Various locations',
    startDate: '2025-09-19',
    endDate: '2025-09-28',
    time: 'Various times',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5',
    ticketUrl: 'https://rotterdam-pride.nl/',
    organizer: 'Rotterdam Pride Foundation',
    website: 'https://rotterdam-pride.nl/',
    category: 'cultural',
    tags: ['festival', 'art', 'culture']
  },
  {
    id: '4',
    title: 'Rotterdam Pride Harbor Party',
    description: 'Celebrate Pride with a unique party at the iconic Rotterdam harbor, featuring international DJs and spectacular water shows.',
    city: 'Rotterdam',
    venue: 'Rotterdam Harbor',
    startDate: '2025-09-21',
    endDate: '2025-09-21',
    time: '14:00 - 00:00',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    ticketUrl: 'https://rotterdam-pride.nl/',
    organizer: 'Rotterdam Pride Foundation',
    website: 'https://rotterdam-pride.nl/',
    category: 'party',
    tags: ['party', 'music', 'harbor']
  },
  // Utrecht Events
  {
    id: '5',
    title: 'Utrecht Pride Walk 2025',
    description: 'A powerful march through the historic city center of Utrecht, celebrating diversity and demanding equality.',
    city: 'Utrecht',
    venue: 'Utrecht Domplein',
    startDate: '2025-06-14',
    endDate: '2025-06-14',
    time: '13:00 - 16:00',
    image: 'https://images.unsplash.com/photo-1558551649-e44c8f992010',
    ticketUrl: 'https://www.utrechtcanalpride.nl/',
    organizer: 'Utrecht Pride',
    website: 'https://www.utrechtcanalpride.nl/',
    category: 'parade',
    tags: ['march', 'demonstration']
  },
  {
    id: '6',
    title: 'Queer Arts Utrecht',
    description: 'A month-long exhibition showcasing LGBTQ+ artists from Utrecht and beyond, hosted in various cultural venues.',
    city: 'Utrecht',
    venue: 'Centraal Museum',
    startDate: '2025-06-01',
    endDate: '2025-06-30',
    time: '10:00 - 17:00',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    ticketUrl: 'https://www.utrechtcanalpride.nl/',
    organizer: 'Utrecht Pride',
    website: 'https://www.utrechtcanalpride.nl/',
    category: 'cultural',
    tags: ['art', 'exhibition', 'culture']
  },
  // Groningen Events
  {
    id: '7',
    title: 'Groningen Pride Festival 2025',
    description: 'The largest Pride celebration in the northern Netherlands, featuring a diverse program of cultural events and performances.',
    city: 'Groningen',
    venue: 'Grote Markt',
    startDate: '2025-08-16',
    endDate: '2025-08-24',
    time: 'Various times',
    image: 'https://images.unsplash.com/photo-1607075636137-1c11b399ca21',
    ticketUrl: 'https://pridegroningen.nl/festival',
    organizer: 'Groningen Pride',
    website: 'https://pridegroningen.nl',
    category: 'cultural',
    tags: ['festival', 'culture', 'community']
  },
  {
    id: '8',
    title: 'Pride Academy Groningen',
    description: 'A series of workshops and lectures at the University of Groningen focusing on LGBTQ+ history, rights, and future challenges.',
    city: 'Groningen',
    venue: 'University of Groningen',
    startDate: '2025-08-18',
    endDate: '2025-08-22',
    time: '10:00 - 16:00',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3',
    ticketUrl: 'https://pridegroningen.nl/',
    organizer: 'University of Groningen',
    website: 'https://pridegroningen.nl',
    category: 'workshop',
    tags: ['education', 'workshop', 'university']
  },
  // Eindhoven Events
  {
    id: '9',
    title: 'Eindhoven Pride Technology Summit',
    description: 'A unique conference exploring the intersection of technology and LGBTQ+ inclusion, hosted by leading tech companies.',
    city: 'Eindhoven',
    venue: 'High Tech Campus',
    startDate: '2025-10-04',
    endDate: '2025-10-04',
    time: '09:00 - 17:00',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
    ticketUrl: 'https://eindhovenpride.nl/',
    organizer: 'Eindhoven Pride',
    website: 'https://eindhovenpride.nl',
    category: 'workshop',
    tags: ['technology', 'conference', 'business']
  },
  {
    id: '10',
    title: 'Glow Pride Eindhoven',
    description: "A special Pride edition of Eindhoven's famous light festival, featuring LGBTQ+ artists and rainbow-themed light installations.",
    city: 'Eindhoven',
    venue: 'City Center',
    startDate: '2025-10-05',
    endDate: '2025-10-05',
    time: '19:00 - 00:00',
    image: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f',
    ticketUrl: 'https://eindhovenpride.nl/',
    organizer: 'Eindhoven Pride',
    website: 'https://eindhovenpride.nl',
    category: 'cultural',
    tags: ['art', 'light festival', 'night event']
  },
  // The Hague Events
  {
    id: '11',
    title: 'The Hague Pride 2025',
    description: 'A celebration of diversity in the international city of peace and justice, featuring cultural events and political discussions.',
    city: 'The Hague',
    venue: 'Various locations',
    startDate: '2025-07-05',
    endDate: '2025-07-13',
    time: 'Various times',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    ticketUrl: 'https://pridethehague.nl/',
    organizer: 'The Hague Pride',
    website: 'https://pridethehague.nl/',
    category: 'cultural',
    tags: ['festival', 'politics', 'international']
  },
  {
    id: '12',
    title: 'Pride at the Beach',
    description: 'A unique beach celebration at Scheveningen, combining sports, music, and entertainment.',
    city: 'The Hague',
    venue: 'Scheveningen Beach',
    startDate: '2025-07-12',
    endDate: '2025-07-12',
    time: '12:00 - 22:00',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    ticketUrl: 'https://pridethehague.nl/',
    organizer: 'The Hague Pride',
    website: 'https://pridethehague.nl/',
    category: 'party',
    tags: ['beach', 'sports', 'party']
  }
];

const cities: City[] = [
  {
    name: 'Amsterdam',
    slug: 'amsterdam',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description: 'Home to one of the world\'s most famous Pride celebrations',
    image: 'https://images.unsplash.com/photo-1533420129452-47fed6d34f52'
  },
  {
    name: 'Rotterdam',
    slug: 'rotterdam',
    coordinates: { lat: 51.9244, lng: 4.4777 },
    description: 'A modern celebration of diversity and inclusion',
    image: 'https://images.unsplash.com/photo-1531117192283-a41f6a903348'
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    coordinates: { lat: 52.0907, lng: 5.1214 },
    description: 'Historic city with a vibrant LGBTQ+ community',
    image: 'https://images.unsplash.com/photo-1685526477682-32816637e655'
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    coordinates: { lat: 53.2194, lng: 6.5665 },
    description: 'Student city with progressive Pride celebrations',
    image: 'https://images.unsplash.com/photo-1607075636137-1c11b399ca21'
  },
  {
    name: 'Eindhoven',
    slug: 'eindhoven',
    coordinates: { lat: 51.4416, lng: 5.4697 },
    description: 'Technology hub with innovative Pride events',
    image: 'https://images.unsplash.com/photo-1542358935821-e4e9f3f3c15d'
  },
  {
    name: 'The Hague',
    slug: 'the-hague',
    coordinates: { lat: 52.0705, lng: 4.3007 },
    description: 'International city celebrating diversity and justice',
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31'
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
              Discover Pride celebrations across the Netherlands in 2025
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
                    <h3 className="text-2xl font-bold text-black mb-2">{city.name}</h3>
                    <p className="text-black/80">{city.description}</p>
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
                      <span>{format(new Date(event.startDate), 'MMMM d, yyyy')} {event.time}</span>
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