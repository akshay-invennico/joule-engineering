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
        } py-2 text-xs font-light tracking-wide`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex flex-row justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="mailto:info@example.com" className="flex items-center gap-1.5">
            <Mail size={13} className="text-[#808080] shrink-0" />
            <span className="hidden sm:inline">info@example.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <span className="text-[#808080]">/</span>
          <a href="tel:+8801790224045" className="flex items-center gap-1.5">
            <Phone size={13} className="text-[#808080] shrink-0" />
            <span>+880 1790 224045</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <MapPin size={13} className="text-[#808080] shrink-0" />
          <span>Capital Office, 124 City Road, Vadodara</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;