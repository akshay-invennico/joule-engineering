'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import capabilitiesImg from '../../../../public/assets/capabilities-img.png'
import capabilitiesBg from '../../../../public/assets/capabilities-bg.png'
import SubHeading from '../subheading/SubHeading';

const Capabilities = () => {
  const capabilities = [
    { name: 'Process Design', href: '/capabilities/process-design' },
    { name: 'Fabrication Detailing', href: '/capabilities/fabrication-detailing' },
    { name: 'Material Compliance', href: '/capabilities/material-compliance' },
    { name: 'Vessel Engineering', href: '/capabilities/vessel-engineering' },
    { name: 'Inspection Coordination', href: '/capabilities/inspection-coordination' },
    { name: 'Quality Documentation', href: '/capabilities/quality-documentation' },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="h-auto absolute inset-0 z-0">
        <Image
          src={capabilitiesBg}
          alt="Capabilities Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">

        <div className='flex items-center justify-between'>

          <div className="mb-12">
            <SubHeading text="Core Engineering Capabilities" className='mb-3' color='white' />
            <h2 className="text-white text-3xl md:text-4xl lg:text-[36px] font-bold mb-5">
              Engineering Capabilities
            </h2>
            <p className="text-white text-sm md:text-base max-w-2xl">
              We provide end-to-end engineering support aligned with project specifications, codes, and
              manufacturing expertise.
            </p>
          </div>
          <div className="mt-12 flex justify-end">
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-2.5 text-white font-semibold py-3 px-6 rounded-full transition-all"
            >
              <span className="bg-white text-[#00AAA5] p-1.5 rounded-full">
                <ArrowRight size={16} />
              </span>
              <span className="text-sm">View All Capabilities</span>

            </Link>
          </div>
        </div>


        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
          {/* Image Container */}
          <div className="relative h-[500px] w-full">
            <Image
              src={capabilitiesImg}
              alt="Engineering Capabilities"
              fill
              className="object-cover"
            />

            {/* Overlay List */}
            <div className="absolute bottom-0 left-0 z-10 w-full md:w-[400px]">
              <div className="bg-white/80 backdrop-blur-lg rounded-tr-2xl py-2 shadow-lg border-y border-r border-white/20">
                <div className="flex flex-col">
                  {capabilities.map((capability, index) => (
                    <Link
                      key={index}
                      href={capability.href}
                      className="group flex items-center justify-between py-4 px-8 border-b border-gray-200 transition-all duration-300 hover:border-secondary"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                        {capability.name}
                      </span>
                      <div className="relative w-5 h-5 flex items-center justify-center text-gray-900 group-hover:text-secondary transition-colors duration-300">
                        <ArrowUpRight
                          size={20}
                          className="absolute transition-all duration-300 opacity-100 rotate-0 scale-100 group-hover:opacity-0 group-hover:rotate-45 group-hover:scale-0"
                        />
                        <ArrowRight
                          size={20}
                          className="absolute transition-all duration-300 opacity-0 -rotate-45 scale-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;