'use client';

import React from 'react';
import Image from 'next/image';
import capabilitiesImg from '../../../../public/assets/excellence.png'
import SubHeading from '../subheading/SubHeading';

const Excellence = () => {
  const capabilities = [
    { name: 'Engineering and execution coordination across teams and partners' },
    { name: 'Capability to support heavy assemblies and long-length components' },
    { name: 'Experience across EPC and industrial customers in Gujarat and overseas supply' },
    { name: 'Documentation and inspection alignment planned early, not after fabrication' },
    { name: 'A practical engineering approach focused on buildability and delivery' },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className='flex items-center justify-between'>
          <div className="mb-12">
            <SubHeading text="Engineering Excellence" className='mb-3' color='#00AAA5' />
            <h2 className="text-primary text-3xl md:text-4xl lg:text-[36px] font-bold mb-5">
              Our Engineering Strength
            </h2>
            <p className="text-[#808080] text-sm md:text-base">
             We bring engineering strength where it matters most, in the parts that decide site fit and long-term performance. Typical scope includes pressure vessels, Outer Jackets, pump base frames, and fabrication attachments built to drawing control.
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden">
          <div className="relative h-[500px] w-full">
            <Image
              src={capabilitiesImg}
              alt="Engineering Capabilities"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 z-10 w-full lg:w-[624px]">
              <div className="bg-white/80 backdrop-blur-lg rounded-tr-2xl py-2 border-y border-r border-white/20">
                <div className="flex flex-col">
                  {capabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="group flex items-center justify-between py-4 px-8 border-b border-gray-200 transition-all duration-300 hover:border-secondary"
                    >
                      <span className="font-semibold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                        {capability.name}
                      </span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;