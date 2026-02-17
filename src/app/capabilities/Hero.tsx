import React from 'react';
import HeroImg from '../../../public/assets/capabilities-hero-img.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-start overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={HeroImg}
          alt="Industrial Worker with fabrication machinery"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full md:w-3/4 lg:w-2/3 mt-5">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary mb-5 uppercase tracking-wide">
            Engineering Capabilities
          </h1>
          <p className="text-[#808080] text-sm md:text-base lg:text-lg max-w-3xl">
            Joule Engineering Works delivers engineering-driven fabrication solutions tailored to complex industrial requirements. Our approach integrates technical precision, code compliance, and practical execution understanding to support EPC companies and industrial clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;