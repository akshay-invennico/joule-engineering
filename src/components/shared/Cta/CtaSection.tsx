'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SubHeading from '../subheading/SubHeading';
import ctaBg from '../../../../public/assets/cta-bg.png'

const CtaSection = () => {
  return (
    <section className="relative bg-[#00AAA5] overflow-hidden">
      <div className="container mx-auto px-4 lg:pl-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
            <SubHeading text="Building Your Vision" className='mb-3' color='white' />
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-8 leading-tight">
              Let&apos;s Build Dream Something Amazing.
            </h2>
            <p className='mb-8'>Partner with Joule Engineering Works for quality fabrication solutions backed by engineering expertise and infrastructure strength.</p>

            <button className="group group-hover:text-[#00AAA5] relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none cursor-pointer">
              {/* Expanding Background */}
              <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-white rounded-full transition-all duration-500 ease-in-out z-0" />

              {/* Text Wrapper */}
              <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
                <span className="text-lg font-bold text-white group-hover:text-[#00AAA5] transition-colors duration-500 ease-in-out">
                  Start Journey
                </span>
              </span>

              {/* Arrow Wrapper */}
              <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-[#00AAA5] transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden opacity-20 mix-blend-overlay">
            <Image
              src={ctaBg}
              alt="Industrial Background Pattern"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default CtaSection;