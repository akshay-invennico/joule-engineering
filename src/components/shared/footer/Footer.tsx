'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../../../public/assets/logo2.png';
import routes from '@/app/routes';

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FF] pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-[38px] gap-8">
          <div className="max-w-xl">
            <Link href="/" className="inline-block mb-4">
              <Image src={logo} alt="Joule Engineering Works" width={200} height={60} className="object-contain" />
            </Link>

          </div>
          <p className="text-[#808080] font-bold max-w-md">
            Welcome to Joule Engineering Works, where innovation meet our passion in a journey that started dream.
          </p>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <h4 className="font-bold text-black">Follow Us</h4>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-[#00AAA5] flex items-center justify-center text-[#00AAA5] hover:bg-[#00AAA5] hover:text-white transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#E4E4E4] border-b mb-8">

          {/* Column 1: Locations */}
          <div className='border-r border-[#E4E4E4] py-10'>
            <h3 className="font-bold text-[20px] mb-6">Our Locations</h3>

            <div className="mb-6">
              <h4 className="text-primary font-bold mb-2">Bengaluru, India</h4>
              <p className="text-[#808080] text-sm leading-relaxed">
                21, Rest House Road, Bengaluru,<br /> Karnataka, 560001
              </p>
              <div className="w-8 h-[2px] bg-[#00AAA5] mt-3"></div>
            </div>

            <div>
              <h4 className="text-primary font-bold mb-2">Vadodara, India</h4>
              <p className="text-[#808080] text-sm leading-relaxed">
                14, Subhalaxmi Estate, Makarpura GIDC,<br /> Vadodara, Gujarat, 390010
              </p>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className='border-r border-[#E4E4E4] py-10'>
            <h3 className="font-bold text-[20px] mb-6 tracking-wide">Company</h3>
            <ul className="space-y-5 text-[#808080]">
              <li>
                <Link href={routes.about} className="hover:text-[#00AAA5] transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link href={routes.contact} className="hover:text-[#00AAA5] transition-colors">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href={routes.blogs} className="hover:text-[#00AAA5] transition-colors">
                  Blog & Updates
                </Link>
              </li>

              <li>
                <Link href={routes.faq} className="hover:text-[#00AAA5] transition-colors">
                  FAQ&apos;s
                </Link>
              </li>

              <li>
                <Link href={routes.privacyPolicy} className="hover:text-[#00AAA5] transition-colors">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href={routes.termsAndConditions} className="hover:text-[#00AAA5] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className='border-r border-[#E4E4E4] py-10'>
            <h3 className="font-bold text-[20px] mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-5 text-[#808080]">
              {[
                { label: 'Engineering Capabilities', href: '/capabilities' },
                { label: 'Manufacturing Capabilities', href: '/capabilities' },
                { label: 'Products', href: '/products' },
                { label: 'Executed Projects', href: '/projects' },
                { label: 'Infrastructure & Facility', href: '/infrastructure' },
                { label: 'Clients', href: '/clients' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#00AAA5] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className='py-10'>
            <h3 className="font-bold text-[20px] mb-6 tracking-wide">Get in Touch</h3>
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-primary shrink-0">
                  <Phone size={30} />
                </div>
                <div>
                  <p className="text-gray-400">Call</p>
                  <a href="tel:+8801790224045" className="text-primary font-bold text-lg hover:underline">9879595031 , 7203000537</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-primary shrink-0">
                  <Mail size={30} />
                </div>
                <div>
                  <p className="text-gray-400">Mail</p>
                  <a href="mailto:joule.engg@gmail.com" className="text-primary font-bold text-lg hover:underline">joule.engg@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-primary shrink-0">
                  <MapPin size={30} />
                </div>
                <div>
                  <p className="text-gray-400">Map Direction</p>
                  <a href="https://www.google.com/maps/place/JOULE+ENGINEERING+WORKS/@22.5730231,73.4976138,17z/data=!3m1!4b1!4m6!3m5!1s0x396081b7facc4ba3:0x7433d66c38d96ea9!8m2!3d22.5730231!4d73.5001887!16s%2Fg%2F11p0w2_bl6?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" className="text-primary font-bold text-lg hover:underline">Show on Map</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#808080]">
          <p>© Joule Engineering Works. All rights reserved.</p>
          <p>
            Designed & Developed by{' '}
            <a
              href="https://www.invennico.com/"
              className="text-[#00AAA5] font-bold"
            >
              Invennico Technolabs
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;