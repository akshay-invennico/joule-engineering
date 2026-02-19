'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/contact-bg.png';
import SubHeading from '@/components/shared/subheading/SubHeading';
import {
  MessageCircle,
  Wrench,
  Headphones,
  Handshake,
} from 'lucide-react';

const contactCards = [
  {
    title: 'Sales Inquiry',
    description:
      'For project discussions, quotations, and new fabrication requirements.',
    email: 'sales@jouleengineering.com',
    icon: MessageCircle,
  },
  {
    title: 'Technical Support',
    description:
      'For drawing clarifications, engineering coordination, and specification alignment.',
    email: 'engineering@jouleengineering.com',
    icon: Wrench,
  },
  {
    title: 'Customer Service',
    description:
      'For order inquiries, shipping questions, and returns.',
    email: 'service@jouleengineering.com',
    icon: Headphones,
  },
  {
    title: 'Partnership Opportunities',
    description:
      'For collaboration inquiries, partnerships, and business development.',
    email: 'partnerships@jouleengineering.com',
    icon: Handshake,
  },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[750px] flex items-center overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={heroBg}
          alt="Industrial projects background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <SubHeading
            text="Connect with the Team"
            className="mb-3"
            color="#00AAA5"
          />
          <h2 className="text-3xl md:text-[36px] font-bold text-primary mb-4">
            We’d Be Glad to Hear From You
          </h2>
          <p className="text-[#808080]">
            Choose the appropriate contact channel below to ensure your inquiry
            is directed to the relevant department for faster response and
            technical alignment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#E4E4E4]"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold text-black mb-2">
                  {card.title}
                </h3>

                <p className="text-sm text-[#808080] mb-3 leading-relaxed">
                  {card.description}
                </p>

                <a
                  href={`mailto:${card.email}`}
                  className="text-sm font-medium text-[#00AAA5] hover:underline"
                >
                  {card.email}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
