
import React, { useState } from 'react';
import { CreditCard, User, ShoppingBag, Menu, Calendar, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface NavigationProps {
  userCredits: number;
}

const Navigation = ({ userCredits }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-midnight">
              Studio<span className="text-fitness-red">Link</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Browse Classes
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              My Dashboard
            </Link>
            <Link to="/store" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Store
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-fitness-red transition-colors font-medium">
              Support
            </Link>
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
            <Button variant="ghost" size="sm" className="hidden md:flex items-center" asChild>
              <Link to="/dashboard">
                <Calendar className="h-4 w-4 mr-2" />
                My Classes
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/store">
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">
                <User className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-fitness-red transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Classes
              </Link>
              <Link 
                to="/dashboard" 
                className="block text-gray-700 hover:text-fitness-red transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Dashboard
              </Link>
              <Link 
                to="/store" 
                className="block text-gray-700 hover:text-fitness-red transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Store
              </Link>
              <Link 
                to="/support" 
                className="block text-gray-700 hover:text-fitness-red transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <div className="pt-3 border-t border-gray-200">
                <Link 
                  to="/login" 
                  className="block text-gray-700 hover:text-fitness-red transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
