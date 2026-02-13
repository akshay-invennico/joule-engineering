import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const SubHeader = () => {
  return (
    <div className="bg-transparent text-white py-2 text-xs md:text-sm font-light tracking-wide w-full z-50 absolute top-0 left-0 right-0 border-b border-gray-600/30">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
            <Mail size={14} className="text-gray-300" />
            <span>info@example.com</span>
          </a>
          <span className="hidden sm:inline-block text-gray-500">|</span>
          <a href="tel:+8801790224045" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
            <Phone size={14} className="text-gray-300" />
            <span>+880 1790 224045</span>
          </a>
        </div>

        {/* Right Side: Address */}
        <div className="flex items-center gap-2 text-center md:text-right">
          <MapPin size={14} className="text-gray-300 shrink-0" />
          <span>Capital Office, 124 City Road, Vadodara</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;