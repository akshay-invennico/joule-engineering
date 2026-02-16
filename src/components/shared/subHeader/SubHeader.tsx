'use client'

import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SubHeader = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div
      className={`w-full z-50 ${isHome && !isScrolled
        ? 'bg-transparent text-white absolute top-0 left-0 right-0 border-b border-gray-600/30'
        : 'bg-white text-[#808080] sticky top-0 border-b border-[#E4E4E4]'
        } py-2 text-xs md:text-sm font-light tracking-wide`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200">
            <Mail size={14} className="text-[#808080]" />
            <span>info@example.com</span>
          </a>
          <span className="hidden sm:inline-block text-[#808080]">|</span>
          <a href="tel:+8801790224045" className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200">
            <Phone size={14} className="text-[#808080]" />
            <span>+880 1790 224045</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-center md:text-right">
          <MapPin size={14} className="text-[#808080] shrink-0" />
          <span>Capital Office, 124 City Road, Vadodara</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;