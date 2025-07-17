
import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, CreditCard, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClassCard from '@/components/ClassCard';
import RegionFilter from '@/components/RegionFilter';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userCredits] = useState(15); // Mock user credits

  // Mock class data
  const classes = [
    {
      id: 1,
      name: "Morning Vinyasa Flow",
      studio: "Zen Studio",
      type: "Yoga",
      region: "Central",
      time: "08:00",
      date: "2024-01-18",
      credits: 2,
      spotsLeft: 5,
      rating: 4.8,
      instructor: "Sarah Chen",
      duration: 60,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "HIIT Power Hour",
      studio: "Forge Fitness",
      type: "HIIT",
      region: "North",
      time: "18:30",
      date: "2024-01-18",
      credits: 3,
      spotsLeft: 2,
      rating: 4.9,
      instructor: "Marcus Johnson",
      duration: 45,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Reformer Pilates",
      studio: "Core Studio",
      type: "Pilates",
      region: "West",
      time: "12:00",
      date: "2024-01-18",
      credits: 4,
      spotsLeft: 8,
      rating: 4.7,
      instructor: "Emma Wilson",
      duration: 50,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Spin & Strength",
      studio: "Cycle Hub",
      type: "Cycling",
      region: "East",
      time: "07:00",
      date: "2024-01-18",
      credits: 3,
      spotsLeft: 12,
      rating: 4.6,
      instructor: "Alex Turner",
      duration: 45,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Mindful Meditation",
      studio: "Inner Peace",
      type: "Meditation",
      region: "South",
      time: "19:00",
      date: "2024-01-18",
      credits: 1,
      spotsLeft: 15,
      rating: 4.9,
      instructor: "Maya Patel",
      duration: 30,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Boxing Bootcamp",
      studio: "Fighter's Den",
      type: "Boxing",
      region: "Central",
      time: "20:00",
      date: "2024-01-18",
      credits: 4,
      spotsLeft: 6,
      rating: 4.8,
      instructor: "Tony Rodriguez",
      duration: 60,
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop"
    }
  ];

  const filteredClasses = classes.filter(cls => {
    const matchesRegion = selectedRegion === 'All' || cls.region === selectedRegion;
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.studio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation userCredits={userCredits} />
      
      <HeroSection />
      
      <StatsSection />
      
      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-midnight">
              FIND YOUR PERFECT CLASS
            </h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by class, studio, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-fitness-red transition-colors"
              />
            </div>
            
            {/* Region Filter */}
            <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-midnight">
              Available Classes ({filteredClasses.length})
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CreditCard className="h-4 w-4" />
              <span>Your Credits: <strong className="text-success">{userCredits}</strong></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map(classItem => (
              <ClassCard
                key={classItem.id}
                classData={classItem}
                userCredits={userCredits}
              />
            ))}
          </div>
          
          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No classes found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">READY TO START YOUR FITNESS JOURNEY?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of Londoners discovering their perfect workout</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-fitness-red hover:bg-red-600 text-white font-semibold px-8">
              BROWSE ALL CLASSES
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight font-semibold px-8">
              DOWNLOAD APP
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StudioLink</h3>
              <p className="text-gray-400">Connecting London's fitness community, one class at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Users</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Classes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Studios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Studio Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StudioLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
