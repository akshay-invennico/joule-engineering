'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/projects-hero.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-5 leading-tight tracking-wide">
            Built for Precision. Powered by Engineering Excellence.
          </h1>

          <p className="text-white text-base md:text-lg mb-5 font-bold max-w-2xl leading-relaxed">
            Joule Engineering Works operates a purpose-built manufacturing
            facility designed to support precision fabrication for process
            industries. With advanced machinery, structured workflow zones, and
            heavy-duty handling systems, our infrastructure enables safe,
            efficient, and high-quality production of industrial equipment
            components.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
