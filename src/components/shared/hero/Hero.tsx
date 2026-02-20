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
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col items-start justify-center h-full pt-20">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl lg:text-[44px] font-bold leading-tight mb-5">
            Engineering & Fabrication Solutions for <br className="hidden md:block" />
            Critical Industrial Applications
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-5 leading-relaxed">
            Delivering precision-engineered process equipment and heavy fabrication for EPC companies and industrial leaders across India and overseas.
          </p>

          <Link
            href="/capabilities"
            className="group inline-flex items-center gap-2.5 text-white font-semibold rounded-full transition-all"
          >
            <span className="bg-white text-[#00AAA5] p-3.5 rounded-full">
              <ArrowRight size={18} />
            </span>
            <span className="text-lg">Discuss Your Requirement</span>

          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[54px] text-center lg:text-left">
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