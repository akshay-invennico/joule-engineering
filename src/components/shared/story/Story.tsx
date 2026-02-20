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
import SubHeading from '../subheading/SubHeading';
import Link from 'next/link';

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
            <div className="mb-3">
              <SubHeading text="Our Story" />
            </div>

            <h2 className="text-[#0063A2] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              Combining Engineering Industry, And Factory Expertise.
            </h2>

            <div className="space-y-2 mb-5 text-[#808080] text-sm md:text-base leading-relaxed">
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

            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-2 text-white font-semibold rounded-full transition-all"
            >
              <span className="bg-primary text-white p-3.5 rounded-full">
                <ArrowRight size={18} color='white' />
              </span>
              <span className="text-base text-primary">Learn more about us</span>

            </Link>

            <div className="mt-20">
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border rounded-full border-[#233AFF33]">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="11.5" fontWeight="500" letterSpacing="2px" fill="#000000">
                      <textPath xlinkHref="#circlePath" className="uppercase font-medium">
                        Brand • Strategy • Design •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#233AFF33] flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center justify-center text-[#0063A2]">
                    <div className="w-2 h-2 bg-[#0063A2] rounded-full mb-1"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14" />
                      <path d="M19 12l-7 7-7-7" />
                    </svg>
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

            <div className="mt-[38px] text-center lg:text-left">
              <p className="text-[#808080] text-base leading-relaxed">
                Our work is defined by unwavering reliability, unrivaled expertise, adherence to standards,
                and a commitment to long-term client relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-primary text-2xl md:text-3xl font-bold text-left mb-10">
            Trusted by Leading Industrial & EPC Organizations
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center mb-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="relative grayscale"
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
            <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
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