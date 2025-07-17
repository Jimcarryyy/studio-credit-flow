
import React from 'react';
import { Search, MapPin, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-midnight via-midnight to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-fitness-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-success rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              LONDON'S
              <span className="block text-fitness-red">FITNESS</span>
              <span className="block">REVOLUTION</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover, book, and experience the best fitness classes across London. 
              One platform, unlimited possibilities.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-fitness-red" />
              </div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-gray-300">Partner Studios</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-success" />
              </div>
              <div className="text-3xl font-bold mb-1">4.9</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-fitness-red" />
              </div>
              <div className="text-3xl font-bold mb-1">50k+</div>
              <div className="text-gray-300">Classes Booked</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-fitness-red hover:bg-red-600 text-white font-bold px-8 py-4 text-lg"
            >
              <Search className="h-5 w-5 mr-2" />
              EXPLORE CLASSES
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-midnight font-bold px-8 py-4 text-lg"
            >
              HOW IT WORKS
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-sm text-gray-400">
            <p>Trusted by fitness enthusiasts across London</p>
            <div className="flex justify-center items-center mt-4 space-x-8 opacity-60">
              <span className="font-semibold">CENTRAL</span>
              <span className="font-semibold">NORTH</span>
              <span className="font-semibold">EAST</span>
              <span className="font-semibold">WEST</span>
              <span className="font-semibold">SOUTH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
