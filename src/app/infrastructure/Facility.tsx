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
              Integrated Manufacturing Infrastructure
            </h2>

            <div className="space-y-2 mb-5 text-[#808080] text-sm md:text-base leading-relaxed">
              <p>
                Joule Engineering Works operates a structured manufacturing facility designed to support heavy fabrication and industrial equipment assembly. The infrastructure is organized to ensure workflow efficiency, safety compliance, and execution accuracy.
              </p>
              <p>
                Our layout enables systematic material movement, fabrication sequencing, and inspection readiness aligned with project timelines and industrial standards.
              </p>
            </div>

            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 text-white font-semibold rounded-full transition-all"
            >
              <span className="bg-primary text-white p-1.5 rounded-full">
                <ArrowRight size={16} />
              </span>
              <span className="text-base text-primary">Our Capabilities</span>

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