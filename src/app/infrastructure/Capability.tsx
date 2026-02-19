'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import story from '../../../public/assets/infrastructure/infra2.png'
import SubHeading from '@/components/shared/subheading/SubHeading';
import Link from 'next/link';

const Capability = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">

          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden">
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

          <div className="relative">
            <div className="mb-3">
              <SubHeading text="Infrastructure capability" color='#00AAA5' />
            </div>

            <h2 className="text-primary text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              Equipped to Deliver Complex Industrial Fabrication
            </h2>

            <div className="space-y-2 mb-5 text-[#808080] text-sm md:text-base leading-relaxed">
              <p>
                Our infrastructure is built to support technically demanding fabrication requirements with reliability and precision. From heavy structural assemblies to process equipment components, we maintain operational control across all stages.
              </p>
            </div>

            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 text-white font-semibold rounded-full transition-all"
            >
              <span className="bg-primary text-white p-1.5 rounded-full">
                <ArrowRight size={16} />
              </span>
              <span className="text-base text-primary">Discuss Your Infrastructure Requirements</span>

            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Capability;