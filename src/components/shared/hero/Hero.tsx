import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import logo from '../../../../public/assets/home-bg.png'

const Hero = () => {
  // Statistics Data
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
        <Image
          src={logo}
          alt="Industrial Engineering Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex flex-col items-start justify-center h-full pt-20">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl lg:text-[44px] font-bold leading-tight mb-6">
            Engineering & Fabrication Solutions for <br className="hidden md:block" />
            Critical Industrial Applications
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Delivering precision-engineered process equipment and heavy fabrication for EPC companies and industrial leaders across India and overseas.
          </p>

          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-white text-secondary font-bold py-3 px-6 rounded-full transition-all hover:bg-primary hover:text-white"
          >
            <span className="bg-secondary text-white p-1 rounded-full group-hover:bg-white group-hover:text-primary transition-colors">
              <ArrowRight size={16} />
            </span>
            <span>Discuss Your Requirement</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center lg:text-left">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start">
                <span className="text-white text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                <span className="text-gray-300 text-xs md:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;