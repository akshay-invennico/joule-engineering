"use client";

import SubHeading from "@/components/shared/subheading/SubHeading";
import React from "react";

const content = [
  {
    eyebrow: "Vision & Commitment",
    title: "Focused on Sustainable Industrial Partnerships",
    description:
      "Our vision is to serve as a dependable fabrication partner for technically demanding industrial projects. We are committed to maintaining engineering integrity, compliance discipline, and long-term client trust through structured planning, execution accuracy, and accountability at every stage.",
  },
  {
    eyebrow: "Management Philosophy",
    title: "Execution Integrity & Operational Control",
    description:
      "Our management philosophy emphasizes systematic execution, safety compliance, and transparent coordination. We prioritize technical clarity, structured workflows, and disciplined documentation to ensure alignment with client expectations.",
  },
  {
    eyebrow: "Quality Commitment",
    title: "Quality as a Core Operational Principle",
    description:
      "Quality is integrated into every stage of our fabrication process. From material selection to final inspection, we implement robust quality assurance systems aligned with recognized industrial standards.",
  },
  {
    eyebrow: "Certifications & Standards",
    title: "Compliance with Industry Standards",
    description:
      "Our fabrication activities are aligned with applicable engineering codes and ISO-aligned quality management practices. We support inspection coordination and documentation requirements as specified in project contracts.",
  },
];

const Journey = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-6xl px-6 text-center mb-10">
        <p className="text-[14px] text-[#00AAA5]">Our journey</p>
        <h1 className="text-primary text-[36px] font-bold mt-3 mb-5">Built on Experience & Execution Discipline</h1>
        <p className="text-[#808080] text-[16px] leading-[24px]">Over the years, Joule Engineering Works has developed strong execution capabilities across diverse industrial sectors. Our growth has been driven by consistent project delivery, material expertise, and adherence to quality standards. Through collaboration with reputed industrial organizations, we have strengthened our technical foundation and operational reliability.</p>
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
                className={`grid gap-6 px-6 py-12 md:grid-cols-12 md:px-12 ${index !== content.length - 1
                  ? "border-b border-gray-200"
                  : ""
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
