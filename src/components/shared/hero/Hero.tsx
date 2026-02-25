import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: '20+', label: 'Years of Fabrication Experience' },
    { value: '100+', label: 'Projects Executed' },
    { value: '50+', label: 'Clients Served' },
    { value: '200+', label: 'Hours of Consultation' },
    { value: '10+', label: 'Awards Won' },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-150"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col items-start justify-center h-full pt-36 md:pt-28 lg:pt-20">
        <div className="max-w-4xl mb-64 md:mb-0">
          <h1 className="text-white text-3xl md:text-5xl lg:text-[44px] font-bold leading-tight mb-5">
            Engineering & Fabrication Solutions for <br className="hidden md:block" />
            Critical Industrial Applications
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-2xl mb-5 leading-relaxed">
            Delivering precision-engineered process equipment and heavy fabrication for EPC companies and industrial leaders across India and overseas.
          </p>

          <Link
            href="/capabilities"
            className="group group-hover:text-primary relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
          >
            {/* Expanding Background */}
            <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-white rounded-full transition-all duration-500 ease-in-out z-0" />

            {/* Text Wrapper */}
            <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
              <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-500 ease-in-out">
                Discuss Your Requirement
              </span>
            </span>

            {/* Arrow Wrapper */}
            <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-[#00AAA5] hover:text-primary transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 md:gap-[54px] text-center lg:text-left">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start">
                <span className="text-white text-3xl md:text-[32px] font-bold mb-1">{stat.value}</span>
                <span className="text-white text-xs md:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;