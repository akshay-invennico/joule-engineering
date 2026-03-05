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
    description: 'Custom equipment built to process duty, material selection, and inspection requirements, with fabrication control from shop to dispatch.'
  },
  {
    icon: <Zap size={48} strokeWidth={1.5} />,
    title: 'Power & Energy',
    description: 'Fabrication support for plant equipment and structural items where execution discipline, safety, and compliance expectations are non-negotiable.'
  },
  {
    icon: <Droplet size={48} strokeWidth={1.5} />,
    title: 'Oil & Gas',
    description: 'Process equipment and skids for oil and gas duties with controlled welding, fit-up, and documentation readiness for inspection steps.'
  },
  {
    icon: <Sun size={48} strokeWidth={1.5} />,
    title: 'Sustainable Solutions',
    description: 'Fabrication support for utility and treatment-related projects with a focus on dependable operation, maintainability, and practical site integration.'
  },
  {
    icon: <Settings size={48} strokeWidth={1.5} />,
    title: 'EPC & Heavy Engineering',
    description: 'Working with EPC teams from design inputs through manufacturing and delivery planning, to reduce site corrections and keep installation smoother.'
  },
  {
    icon: <Factory size={48} strokeWidth={1.5} />,
    title: 'Industrial Manufacturing',
    description: 'Manufacturing support with controlled processes and consistent workmanship, backed by in-house and partner facilities for machining and fit-up.'
  },
  {
    icon: <Wrench size={48} strokeWidth={1.5} />,
    title: 'Infrastructure & Utilities',
    description: 'Fabrication for industrial infrastructure items where safety, access, and long service life are important acceptance factors.'
  },
  {
    icon: <Atom size={48} strokeWidth={1.5} />,
    title: 'Pharmaceuticals & Food',
    description: 'Fabrication support for process environments that demand clean workmanship, controlled execution, and compliance with project specifications.'
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