'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ctaBg from '../../../../public/assets/execution-cta.jpg';
import SubHeading from '../subheading/SubHeading';

const ExecutionCta = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={ctaBg}
          alt="Industrial construction site"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="w-full">
          <SubHeading text="Discuss Your Project" className="mb-3" color="white" />

          <h2 className="text-3xl md:text-5xl lg:text-[44px] font-bold mb-6">
            Have a Project Requirement <br /> to Discuss?
          </h2>

          <p className="text-white text-base mb-6 w-full">
           Share your drawings or scope. We will review the build approach, material needs, inspection expectations, and delivery plan with your team.
          </p>

          <Link
            href="/contact"
            className="group group-hover:text-[#00A99D] relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
          >
            {/* Expanding Background */}
            <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-white rounded-full transition-all duration-500 ease-in-out z-0" />

            {/* Text Wrapper */}
            <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
              <span className="text-lg font-bold text-white group-hover:text-[#00A99D] transition-colors duration-500 ease-in-out">
                Discuss Your Project
              </span>
            </span>

            {/* Arrow Wrapper */}
            <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-[#00A99D] transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExecutionCta;