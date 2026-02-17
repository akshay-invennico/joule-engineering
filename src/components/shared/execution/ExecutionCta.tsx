'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ctaBg from '../../../../public/assets/execution-cta.jpg';
import SubHeading from '../subheading/SubHeading';

const ExecutionCta = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={ctaBg}
          alt="Industrial construction site"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
        <div className="w-full">
          <SubHeading text="Discuss Your Project" className="mb-3" color="white" />

          <h2 className="text-3xl md:text-5xl lg:text-[44px] font-bold mb-6">
            Have a Project Requirement <br /> to Discuss?
          </h2>

          <p className="text-white text-base mb-6 w-full">
            Connect with our engineering team to review technical specifications, fabrication scope, and compliance requirements.
          </p>

          <Link href="/contact" className="inline-flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A99D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">
              Discuss Your Project
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExecutionCta;