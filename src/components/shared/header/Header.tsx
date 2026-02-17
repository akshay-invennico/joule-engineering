'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../../public/assets/logo.png';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'CAPABILITIES', href: '/capabilities', hasDropdown: false },
    { label: 'PROJECTS', href: '/projects', hasDropdown: false },
    { label: 'INFRASTRUCTURE', href: '/infrastructure', hasDropdown: false },
    { label: 'CLIENTS', href: '/clients', hasDropdown: false },
    { label: 'COMPANY', href: '/company', hasDropdown: true },
  ];

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${isHome && !isScrolled
        ? 'bg-transparent absolute top-[40px] left-0 right-0 border-b border-[#E4E4E4]'
        : 'bg-white sticky top-[36px] text-gray-800 border-b border-[#E4E4E4]'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              height={44}
              width={135}
              alt="Industrial Engineering Background"
              className="object-cover"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group cursor-pointer">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#00AAA5] hover:bg-primary-dark text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-300 tracking-wider"
            >
              GET IN TOUCH
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-500 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className={isHome && !isScrolled && !isMobileMenuOpen ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu size={28} className={isHome && !isScrolled ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-50 hover:text-primary transition-colors flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white text-center font-bold py-3 rounded-md mt-2 shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;