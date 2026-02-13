'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import capabilitiesImg from '../../../../public/assets/capabilities-img.png'
import capabilitiesBg from '../../../../public/assets/capabilities-bg.png'

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
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
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
            <p className="text-[#00AAA5] text-sm font-semibold tracking-wider uppercase mb-4">
              Engineering and Fabrication
            </p>
            <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold mb-4">
              Engineering Capabilities
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl">
              We provide end-to-end engineering support aligned with project specifications, codes, and
              manufacturing expertise.
            </p>
          </div>
          <div className="mt-12 flex justify-end">
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 text-white font-semibold py-3 px-6 rounded-full transition-all"
            >
              <span className="bg-[#0A2540] text-white p-1.5 rounded-full group-hover:bg-white group-hover:text-[#00AAA5] transition-all">
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
              <div className="bg-white/90 backdrop-blur-md rounded-r-2xl py-2 shadow-lg border-y border-r border-white/20">
                <div className="flex flex-col">
                  {capabilities.map((capability, index) => (
                    <Link
                      key={index}
                      href={capability.href}
                      className="group flex items-center justify-between py-3 px-8 transition-all duration-300 hover:bg-white/50"
                    >
                      <span className="font-semibold text-gray-900 group-hover:underline decoration-2 underline-offset-4">
                        {capability.name}
                      </span>
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <ArrowUpRight
                          size={20}
                          className="absolute transition-all duration-300 opacity-100 rotate-0 scale-100 group-hover:opacity-0 group-hover:rotate-45 group-hover:scale-0 text-gray-900"
                        />
                        <ArrowRight
                          size={20}
                          className="absolute transition-all duration-300 opacity-0 -rotate-45 scale-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 text-gray-900"
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