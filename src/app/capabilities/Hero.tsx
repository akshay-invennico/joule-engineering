import React from 'react';
import HeroImg from '../../../public/assets/capabilities-hero-img.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[900px] max-h-[1200px] flex items-start overflow-hidden">
      <div className="absolute inset-0  z-0 gap-x-4">
        <Image
          src={HeroImg}
          alt="Industrial Worker with fabrication machinery"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 py-15 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full md:w-3/4 lg:w-2/3 mt-5">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary mb-5">
            Engineering Capabilities
          </h1>
          <p className="text-[#808080] text-sm md:text-base lg:text-lg max-w-3xl ">
            At Joule Engineering Works, engineering is not separate from
            fabrication. We design the build path before metal is cut, so
            fit-up, handling, welding, and inspection stay under control. This
            approach suits EPC teams and plant owners who need equipment
            delivered ready for installation, not rework.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
