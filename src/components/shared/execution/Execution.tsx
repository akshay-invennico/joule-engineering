'use client';

import React from 'react';
import Image from 'next/image';
import Card from './Card';
import SubHeading from '../subheading/SubHeading';
import leftThread from '../../../../public/icons/left-thread.svg';
import rightThread from '../../../../public/icons/right-thread.svg';

const Execution = () => {
  const steps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'We begin by reviewing technical specifications, approved drawings, and project documentation to understand scope, standards, and constraints.'
    },
    {
      step: '02',
      title: 'Engineering & Detailing',
      description: 'Our team prepares and verifies fabrication drawings, structural layouts, and technical documentation aligned with project and code requirements.'
    },
    {
      step: '03',
      title: 'Compliance & Verification',
      description: 'Material traceability, dimensional checks, and inspection test plans are aligned to ensure readiness for client and third-party approvals.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="mb-16 md:mb-24">
          <SubHeading text="Execution Approach" className="mb-3" color="#00AAA5" />
          <h2 className="text-[#0063A2] text-3xl md:text-4xl lg:text-[36px] font-bold">
            Process, We follow
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-start justify-evenly lg:mt-10">

          <div className="relative z-10 lg:w-1/3 flex justify-center lg:mt-24">
            <Card {...steps[0]} />
          </div>

          <div className="hidden lg:block absolute left-[22%] top-[35%] w-[25%] pointer-events-none select-none">
            <Image
              src={leftThread}
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="relative z-10 lg:w-1/3 flex justify-center lg:-mt-12">
            <Card {...steps[1]} />
          </div>

          <div className="hidden lg:block absolute right-[22%] top-[35%] w-[25%] pointer-events-none select-none">
            <Image
              src={rightThread}
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="relative z-10 lg:w-1/3 flex justify-center lg:mt-24">
            <Card {...steps[2]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Execution;