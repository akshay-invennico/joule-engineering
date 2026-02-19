'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import logo from '../../../../public/assets/logo.png';
import routes from '@/app/routes';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const companyDropdown = [
    { label: 'About Us', href: routes.about },
    { label: 'Blogs & Updates', href: routes.blogs },
    { label: "FAQ'S", href: routes.faq },
    { label: 'Contact Us', href: routes.contact },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Capabilities', href: routes.capabilites, hasDropdown: false },
    { label: 'Projects', href: routes.projects, hasDropdown: false },
    { label: 'Infrastructure', href: routes.infrastructure, hasDropdown: false },
    { label: 'Clients', href: routes.clients, hasDropdown: false },
    { label: 'Company', href: '/company', hasDropdown: true },
  ];

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${isHome && !isScrolled
        ? 'bg-transparent absolute top-[40px] left-0 right-0'
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
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${isHome && !isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-black hover:text-[#00AAA5]'
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-3">
                      {companyDropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-6 py-3 text-sm font-medium text-black hover:bg-gray-50 hover:text-[#00AAA5] transition-colors ${index !== companyDropdown.length - 1
                            ? 'border-b border-gray-100'
                            : ''
                            }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#00AAA5] hover:bg-primary-dark text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-300 tracking-wider"
            >
              Get In Touch
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
        <div className="lg:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {!item.hasDropdown ? (
                <Link
                  href={item.href}
                  className="text-gray-800 font-medium py-2 border-b border-gray-50 hover:text-primary transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full flex justify-between items-center text-gray-800 font-medium py-2 border-b border-gray-50"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {mobileCompanyOpen && (
                    <div className="pl-4 pb-2">
                      {companyDropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white text-center font-bold py-3 rounded-md mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;