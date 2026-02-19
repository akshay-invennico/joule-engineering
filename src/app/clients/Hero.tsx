'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/clients-hero.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={heroBg}
          alt="Industrial projects background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="max-w-4xl pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-5 leading-tight uppercase tracking-wide">
            Trusted by Leading Industrial & EPC Organizations
          </h1>

          <p className="text-white text-base md:text-lg mb-5 font-bold max-w-5xl leading-relaxed">
            Joule Engineering Works has built long-term associations with reputed engineering, EPC, and industrial manufacturing companies across India. Our client relationships are founded on execution reliability, quality compliance, and disciplined project delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;