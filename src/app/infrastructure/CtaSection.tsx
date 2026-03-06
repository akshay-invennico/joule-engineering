'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative w-full h-[550px] sm:h-[550px] md:h-[600px] lg:h-[860px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/heavy-fabrication.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content - bottom left aligned */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 md:pb-14">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Title */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold leading-tight mb-3 sm:mb-4">
              Engineered for Heavy & Precision Fabrication
            </h2>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Our facility is structured to support both heavy structural
              fabrication and precision-engineered components. The shop floor
              layout ensures smooth material movement, controlled fabrication
              sequencing, and systematic in-process inspection.
            </p>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Dedicated zones improve workflow efficiency while maintaining
              safety and quality standards. The infrastructure accommodates
              large assemblies as well as low-thickness fabrication requiring
              specialized welding expertise.
            </p>
           <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Close coordination between fabrication and quality teams ensures
              dimensional accuracy, welding integrity, and streamlined
              execution. This organized production environment allows us to
              maintain consistency, minimize delays, and deliver reliable
              fabrication outcomes for industrial applications.
            </p>

            {/* CTA Link */}
            <Link
              href="/capabilities"
              className="group group-hover:text-primary relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
            >
              {/* Expanding Background */}
              <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-white rounded-full transition-all duration-500 ease-in-out z-0" />

              {/* Text Wrapper */}
              <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-primary transition-colors duration-500 ease-in-out">
                  Our Capabilities
                </span>
              </span>

              {/* Arrow Wrapper */}
              <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-primary transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
