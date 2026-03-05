'use client';

import SubHeading from '@/components/shared/subheading/SubHeading';
import React from 'react';

const content = [
  {
    eyebrow: 'Vision & Commitment',
    title: 'Focused on Sustainable Industrial Partnerships',
    description:
      'We aim to be the engineering partner clients can rely on when the scope is demanding and timelines are tight. Our commitment is simple: bring engineering clarity, follow standards, and stay accountable from first review to dispatch.',
  },
  {
    eyebrow: 'Management Philosophy',
    title: 'Execution Integrity & Operational Control',
    description:
      'We run projects with structured reviews, clear interfaces, and disciplined documentation so decisions do not drift from drawings and scope. Fabrication is coordinated through qualified resources, with supervision and checks planned early to prevent rework and schedule slips.',
  },
  {
    eyebrow: 'Quality Commitment',
    title: 'Quality as a Core Operational Principle',
    description:
      'Quality is not a final step for us. It is built into material control, fit up, welding, and checks at each stage. This helps customers complete inspections smoothly and reduces corrections during installation.',
  },
  {
    eyebrow: 'Certifications & Standards',
    title: 'Compliance with Industry Standards',
    description:
      'Our fabrication activities are aligned with applicable engineering codes and ISO 9001:2015 aligned quality management practices, under the supervision of top management. We support inspection coordination and documentation as specified in project requirements.',
  },
];

const Journey = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-6xl px-6 text-center mb-10">
        <p className="text-[14px] text-[#00AAA5]">Our journey</p>
        <h1 className="text-primary text-[36px] font-bold mt-3 mb-5">
          Built on Experience & Execution Discipline
        </h1>
        <p className="text-[#808080] text-[16px] leading-[24px]">
          Growth has come from doing the basics well, understanding materials,
          controlling weld quality, and keeping fabrication aligned to drawings.
          With every project, we have improved how we plan, document, and
          deliver so customers get equipment that installs cleanly and performs
          reliably.
        </p>
      </div>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/about-us.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 -mt-[40vh] pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl">
            {content.map((item, index) => (
              <div
                key={index}
                className={`grid gap-6 px-6 py-12 md:grid-cols-12 md:px-12 ${
                  index !== content.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="md:col-span-4">
                  <SubHeading text={item.eyebrow} color="#00AAA5" />
                  <h3 className="mt-2 text-lg font-semibold text-primary md:text-xl">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-8">
                  <p className="text-sm leading-relaxed text-[#808080] md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
