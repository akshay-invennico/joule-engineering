'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ctaBg from '../../../public/assets/infrastructure/infra3.png';

const CtaSection = () => {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[860px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={ctaBg}
          alt="Heavy Fabrication Shop Floor"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content - bottom left aligned */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 md:pb-14">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Title */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold leading-tight mb-3 sm:mb-4">
              Heavy Fabrication Shop Floor
            </h2>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-lg">
              The shop floor is equipped to handle large-dimension and high-weight fabrication projects.
              It supports simultaneous execution of multiple industrial assemblies without compromising
              safety or quality. Adequate working space, structured fabrication zones, and material
              staging areas ensure smooth workflow from raw material preparation to final dispatch.
            </p>

            {/* CTA Link */}
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 transition-all"
            >
              <span className="bg-white text-primary p-2 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ArrowRight size={16} />
              </span>
              <span className="text-white text-sm sm:text-base font-semibold group-hover:text-white/80 transition-colors duration-300">
                Our Capabilities
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;