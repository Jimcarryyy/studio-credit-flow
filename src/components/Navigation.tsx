
import React from 'react';
import { CreditCard, User, ShoppingBag, Menu, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface NavigationProps {
  userCredits: number;
}

const Navigation = ({ userCredits }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-midnight">
              Studio<span className="text-fitness-red">Link</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Browse Classes
            </a>
            <a href="#" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              My Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Store
            </a>
            <a href="#" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Support
            </a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Credits Display */}
            <div className="hidden sm:flex items-center bg-success/10 text-success px-3 py-1 rounded-full">
              <CreditCard className="h-4 w-4 mr-2" />
              <span className="font-semibold">{userCredits}</span>
              <span className="text-sm ml-1">credits</span>
            </div>

            {/* Action Buttons */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              My Classes
            </Button>
            
            <Button variant="ghost" size="sm">
              <ShoppingBag className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
