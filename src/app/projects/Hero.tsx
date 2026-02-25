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

          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-5 leading-tight tracking-wide">
            Executed Projects
          </h1>

          <p className="text-white text-base md:text-lg mb-5 font-bold max-w-2xl leading-relaxed">
            Joule Engineering Works has successfully executed a wide range of heavy fabrication and process equipment projects for leading EPC companies and industrial clients. Our portfolio reflects technical precision, material expertise, and disciplined execution aligned with industrial standards.
          </p>

          <button className="group group-hover:text-[#00AAA5] relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none cursor-pointer">
            {/* Expanding Background */}
            <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-white rounded-full transition-all duration-500 ease-in-out z-0" />

            {/* Text Wrapper */}
            <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
              <span className="text-lg font-bold text-white group-hover:text-[#00AAA5] transition-colors duration-500 ease-in-out tracking-wide">
                Explore Executed Projects
              </span>
            </span>

            {/* Arrow Wrapper */}
            <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-[#00AAA5] transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;