'use client';

import React from 'react';
import {
  FlaskConical,
  Zap,
  Droplet,
  Sun,
  Settings,
  Factory,
  Wrench,
  Atom
} from 'lucide-react';
import SubHeading from '../subheading/SubHeading';

const industries = [
  {
    icon: <FlaskConical size={48} strokeWidth={1.5} />,
    title: 'Chemical & Process Industries',
    description: 'Meeting the rigorous demands of the chemical sector with custom-engineered equipment and specialized fabrication services. Focus on safety and regulatory compliance.'
  },
  {
    icon: <Zap size={48} strokeWidth={1.5} />,
    title: 'Power & Energy',
    description: 'Meeting the rigorous demands of the chemical sector with custom-engineered equipment and specialized fabrication services. Focus on safety and regulatory compliance.'
  },
  {
    icon: <Droplet size={48} strokeWidth={1.5} />,
    title: 'Oil & Gas',
    description: 'Providing robust and efficient solutions for power generation, transmission, and distribution projects. Expertise in high-pressure piping and critical components.'
  },
  {
    icon: <Sun size={48} strokeWidth={1.5} />,
    title: 'Sustainable Solutions',
    description: 'Supporting the extraction, refining, and transportation of oil and gas resources with durable and reliable fabricated equipment. Adherence to stringent industry standards.'
  },
  {
    icon: <Settings size={48} strokeWidth={1.5} />,
    title: 'EPC & Heavy Engineering',
    description: 'Delivering infrastructure solutions for water, wastewater, and energy distribution. Expertise in large-scale fabrication and adherence to strict quality standards.'
  },
  {
    icon: <Factory size={48} strokeWidth={1.5} />,
    title: 'Industrial Manufacturing',
    description: 'Partnering with EPC companies to deliver comprehensive fabrication solutions for large-scale industrial projects. Expertise in project management and on-time delivery.'
  },
  {
    icon: <Wrench size={48} strokeWidth={1.5} />,
    title: 'Infrastructure & Utilities',
    description: 'Enabling eco-friendly industrial practices through fabrication equipment for waste management, water treatment, and renewable energy projects. Commitment to sustainability.'
  },
  {
    icon: <Atom size={48} strokeWidth={1.5} />,
    title: 'Chemical & Process Industries',
    description: 'Supplying precision-engineered components and equipment to support diverse manufacturing processes. Focus on quality, reliability, and process optimization.'
  }
];

const Industries = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <SubHeading text="Industries Served" className='mb-3' color='#00AAA5' />
          <h2 className="text-primary text-3xl md:text-4xl lg:text-[36px] font-bold leading-tight">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 border-r border-b border-[#E4E4E4] bg-white group"
            >
              <div className="text-primary mb-6">
                {industry.icon}
              </div>
              <h3 className="text-[#0A2540] text-xl font-bold mb-3 leading-tight">
                {industry.title}
              </h3>
              <p className="text-[#808080] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;