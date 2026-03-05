'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import story from '../../../public/assets/infrastructure/infra1.png'
import SubHeading from '@/components/shared/subheading/SubHeading';
import Link from 'next/link';

const Facility = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="mb-3">
              <SubHeading text="Facility overview" color='#00AAA5' />
            </div>

            <h2 className="text-[#0063A2] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
            Modern Manufacturing Facility

            </h2>

            <div className="space-y-2 mb-5 text-[#808080] text-sm md:text-base leading-relaxed">
              <p>
                Our manufacturing unit is located in Halol-Maswad GIDC, Gujarat, within the Delhi–Mumbai Industrial Corridor, offering both strategic connectivity and industrial ecosystem advantages.
              </p>
              <p>
               The facility is developed across approximately 11,000 sq. ft. of land, with over 7,000 sq. ft. of covered fabrication space. The workshop layout is structured for optimized production flow, including dedicated areas for cutting, bending, welding, assembly, inspection, and dispatch.
              </p>
              <p>An 18-meter span overhead crane with high clear height ensures safe handling of heavy fabrication jobs. The shop floor is organized to accommodate large structural assemblies while maintaining accessibility, safety compliance, and operational efficiency.</p>
              <p>Our infrastructure is continuously upgraded to align with evolving industry standards and technological advancements.</p>
            </div>

            <Link
              href="/capabilities"
              className="group group-hover:text-white relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
            >
              {/* Expanding Background */}
              <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-primary rounded-full transition-all duration-500 ease-in-out z-0" />

              {/* Text Wrapper */}
              <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
                <span className="text-base font-semibold text-primary group-hover:text-white transition-colors duration-500 ease-in-out">
                  Our Capabilities
                </span>
              </span>

              {/* Arrow Wrapper */}
              <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-white transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative">
              <div className="relative w-full aspect-4/5">
                <Image
                  src={story}
                  alt="Engineering Team"
                  fill
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;