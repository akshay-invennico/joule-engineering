'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb';
import heroBg from '../../../public/assets/projects-hero.jpg';

const Hero = () => {
  const breadcrumbItems = [
    { label: 'Projects', href: '/projects' }
  ];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={heroBg}
          alt="Industrial projects background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="max-w-4xl pt-10">
          <Breadcrumb items={breadcrumbItems} textColor="white" linkColor="white" />

          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-5 leading-tight uppercase tracking-wide">
            Executed Projects
          </h1>

          <p className="text-white text-base md:text-lg mb-5 font-bold max-w-2xl leading-relaxed">
            Joule Engineering Works has successfully executed a wide range of heavy fabrication and process equipment projects for leading EPC companies and industrial clients. Our portfolio reflects technical precision, material expertise, and disciplined execution aligned with industrial standards.
          </p>

          <button className="inline-flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="text-[#00AAA5] w-6 h-6" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide cursor-pointer">
              Explore Executed Projects
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;