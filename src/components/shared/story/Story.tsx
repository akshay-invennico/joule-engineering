'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import story from '../../../../public/assets/story.png'

import lt from '../../../../public/icons/L&T.svg'
import simem from '../../../../public/icons/simem.svg'
import godrej from '../../../../public/icons/godrej.svg'
import ITT from '../../../../public/icons/ITT.svg'
import thermax from '../../../../public/icons/thermax.svg'

const Story = () => {
  const clientLogos = [
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          <div className="relative">
            <div className="mb-6">
              <span className="text-[#00AAA5] text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
            </div>

            <h2 className="text-[#1E3A8A] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              Combining Engineering Industry, And Factory Expertise.
            </h2>

            <div className="space-y-4 mb-8 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                We are a team of dedicated and experienced engineers who have been serving
                clients in the fabrication and process equipment for industrial applications.
              </p>
              <p>
                With industry know-how and a rich mix of manufacturing and engineering capability, we
                deliver precision-engineered solutions that meet the most stringent quality standards
                and specifications.
              </p>
            </div>

            <button className="group flex items-center gap-3 bg-[#00AAA5] text-white font-semibold py-3 px-6 rounded-full transition-all hover:bg-[#008F8A] shadow-md hover:shadow-lg">
              <span className="bg-white text-[#00AAA5] p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </span>
              <span className="text-sm">Learn More About Us</span>
            </button>

            <div className="absolute -bottom-8 left-0 lg:left-auto lg:-bottom-12 lg:-right-8">
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00AAA5] animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#1E3A8A] font-bold text-lg md:text-xl">We</div>
                    <div className="text-[#1E3A8A] font-bold text-lg md:text-xl">Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative w-full aspect-4/5">
                <Image
                  src={story}
                  alt="Engineering Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-6 text-center lg:text-left">
              <p className="text-gray-600 text-sm leading-relaxed">
                Our work is defined by unwavering reliability, unrivaled expertise, adherence to standards,
                and a commitment to long-term client relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-[#1E3A8A] text-2xl md:text-3xl font-bold text-left mb-12">
            Trusted by Leading Industrial & EPC Organizations
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center mb-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-[#00AAA5] font-semibold text-sm hover:gap-3 transition-all">
              <span>View All Clients</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Story;