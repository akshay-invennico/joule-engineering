'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../../../public/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FF] pt-16 pb-8 text-[#072E4D]">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-xl">
            <Link href="/" className="inline-block mb-4">
              <Image src={logo} alt="Joule Engineering Works" width={200} height={60} className="object-contain" />
            </Link>
            <p className="text-gray-500 font-light text-sm max-w-md">
              Welcome to Joule Engineering Works, where innovation meet our passion in a journey that started dream.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <h4 className="font-bold text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-[#00AAA5] flex items-center justify-center text-[#00AAA5] hover:bg-[#00AAA5] hover:text-white transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-12"></div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* Column 1: Locations */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide uppercase">Our Locations</h3>

            <div className="mb-6">
              <h4 className="text-[#005B96] font-bold mb-2">Bengaluru, India</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                21, Rest House Road, Bengaluru,<br /> Karnataka, 560001
              </p>
              <div className="w-8 h-[2px] bg-[#00AAA5]/30 mt-3"></div>
            </div>

            <div>
              <h4 className="text-[#005B96] font-bold mb-2">Vadodara, India</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                14, Subhalaxmi Estate, Makarpura GIDC,<br /> Vadodara, Gujarat, 390010
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide uppercase">Company</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              {['About Us', 'Contact us', 'Blog & Updates', "FAQ's", 'Resources', 'Certifications'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00AAA5] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              {['Engineering Capabilities', 'Manufacturing Capabilities', 'Products', 'Executed Projects', 'Infrastructure & Facility', 'Clients'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#00AAA5] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide uppercase">Get in Touch</h3>
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-[#005B96] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call</p>
                  <a href="tel:+8801790224045" className="text-[#005B96] font-bold text-sm hover:underline">+880 1790 224045</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-[#005B96] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Mail</p>
                  <a href="mailto:info@example.com" className="text-[#005B96] font-bold text-sm hover:underline">info@example.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-[#005B96] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Map Direction</p>
                  <a href="#" className="text-[#005B96] font-bold text-sm hover:underline">Show on Map</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© Joule Engineering Works. All rights reserved.</p>
          <p>Designed & Developed by <a href="#" className="text-[#00AAA5] font-bold">Invennico Technolabs</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;