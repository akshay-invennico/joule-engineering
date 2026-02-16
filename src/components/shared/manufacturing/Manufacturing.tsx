import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import fabrication from '../../../../public/icons/manufacturing/fabrication.svg'
import welding from '../../../../public/icons/manufacturing/welding.svg'
import setting from '../../../../public/icons/manufacturing/setting.svg'
import crane from '../../../../public/icons/manufacturing/crane.svg'
import workforce from '../../../../public/icons/manufacturing/workforce.svg'
import Image from 'next/image';
import SubHeading from '../subheading/SubHeading';

const Manufacturing = () => {
  const features = [
    {
      title: 'Heavy Fabrication Floor',
      description: 'Our shop floor is designed for heavy-duty fabrication supporting large and complex industrial structures. It enables safe handling of oversized components.',
      icon: fabrication,
    },
    {
      title: 'Welding & Assembly',
      description: 'Advanced welding and assembly setups ensure strong, precise, and code-compliant fabrication across a wide range of industrial applications.',
      icon: welding,
    },
    {
      title: 'Machining & Fit-Up',
      description: 'In-house machining and fit-up capabilities allow accurate alignment, reduced dependencies, and better control over fabrication quality and time.',
      icon: setting,
    },
    {
      title: 'Cranes & Material Handling',
      description: 'High-capacity cranes and material handling systems support efficient movement of heavy components while maintaining safety and operational control.',
      icon: crane,
    },
    {
      title: 'Skilled Workforce',
      description: 'Our experienced workforce brings deep expertise in industrial fabrication, inspection readiness, and execution aligned with project specifications.',
      icon: workforce,
    },
    {
      title: 'Skilled Workforce',
      description: 'Our experienced workforce brings deep expertise in industrial fabrication, inspection readiness, and execution aligned with project specifications.',
      icon: workforce,
    },
  ];

  return (
    <section className="py-16 md:py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            <div className="max-w-3xl">
              <SubHeading text="Manufacturing & Infrastructure" className='mb-3' color='#00AAA5' />
              <h2 className="text-[#0A2540] text-3xl md:text-4xl lg:text-[36px] font-bold leading-tight mb-5 text-center md:text-left">
                Manufacturing Strength &<br /> Infrastructure
              </h2>
              <p className="text-[#808080] text-sm md:text-base leading-relaxed max-w-2xl text-center md:text-left">
                Our manufacturing facility is equipped to handle heavy, complex, and high-precision fabrication work.
              </p>
            </div>

            <div className="flex justify-center md:justify-end shrink-0 mb-2 md:mb-0">
              <Link
                href="/infrastructure"
                className="group flex items-center gap-2 text-primary font-bold text-base"
                aria-label="View Infrastructure"
              >
                <div className="bg-primary text-white p-2 rounded-full">
                  <ArrowRight size={18} />
                </div>
                <span>View Infrastructure</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {features.map((feature, index) => {
            const icons = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-lg p-10 flex flex-col items-start"
              >
                <div className="p-0">
                  <Image
                    height={52}
                    width={52}
                    src={icons}
                    alt={feature.title}
                    className="text-primary"
                  />
                </div>

                <h3 className="text-xl mt-4 mb-3 font-bold">
                  {feature.title}
                </h3>

                <p className="text-[#808080] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Manufacturing;