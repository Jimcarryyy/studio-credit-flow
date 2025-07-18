import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-midnight text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Studio<span className="text-fitness-red">Link</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting you to the best fitness studios across London. 
              Book classes, manage your schedule, and achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-fitness-red cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-fitness-red cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-fitness-red cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-fitness-red cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-fitness-red transition-colors">Browse Classes</Link></li>
              <li><Link to="/dashboard" className="text-gray-300 hover:text-fitness-red transition-colors">My Dashboard</Link></li>
              <li><Link to="/store" className="text-gray-300 hover:text-fitness-red transition-colors">Store</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-fitness-red transition-colors">Support</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-fitness-red transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-fitness-red transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-300 hover:text-fitness-red transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fitness-red transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-fitness-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-fitness-red transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-fitness-red transition-colors">Refund Policy</Link></li>
              <li><Link to="/safety" className="text-gray-300 hover:text-fitness-red transition-colors">Safety Guidelines</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-fitness-red" />
                <span className="text-gray-300">020 7123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-fitness-red" />
                <span className="text-gray-300">hello@studiolink.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-fitness-red" />
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-xs text-gray-400">
                Mon-Fri: 6:00 AM - 10:00 PM<br />
                Sat-Sun: 7:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 StudioLink. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/sitemap" className="text-sm text-gray-400 hover:text-fitness-red transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-sm text-gray-400 hover:text-fitness-red transition-colors">
                Accessibility
              </Link>
              <Link to="/cookies" className="text-sm text-gray-400 hover:text-fitness-red transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;