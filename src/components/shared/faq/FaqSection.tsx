'use client';

import React, { useState } from 'react';
import { data } from './faqData';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1000px]">
        <div className="text-center mb-10">
          <h2 className="text-primary text-3xl md:text-4xl lg:text-[36px] font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`transition-colors duration-300 rounded-lg overflow-hidden ${isOpen ? 'bg-[#F3F5FF]' : 'bg-transparent'
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between px-6 pt-6 pb-3 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <span className="text-black font-bold text-lg min-w-[30px]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-black font-bold text-lg md:text-xl">
                      {item.question}
                    </span>
                  </div>
                  <div className="ml-4 mt-1 text-primary shrink-0">
                    {isOpen ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                >
                  <div className="overflow-hidden px-6 pr-12">
                    <p className="text-[#808080] text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;