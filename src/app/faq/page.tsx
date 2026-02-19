'use client';

import React, { useMemo, useState } from 'react';
import FaqSection from '@/components/shared/faq/FaqSection';
import { data } from '@/components/shared/faq/faqData';

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('All FAQs');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(data.map((item) => item.category)));
    return ['All FAQs', ...unique];
  }, []);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === 'All FAQs') return data;
    return data.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="max-w-3xl mb-8">
          <h1 className="text-primary text-3xl md:text-[36px] font-bold mb-5">
            Explore Our FAQs
          </h1>
          <p className="text-[#808080]">
            Find answers to common questions about our engineering services and
            factory automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-extrabold cursor-pointer leading-[24px]
                ${activeCategory === category
                  ? 'bg-[#F3F5FF] text-primary'
                  : 'hover:bg-[#F3F5FF] text-[#808080] hover:text-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <FaqSection
          items={filteredFaqs}
          showTitle={false}
          activeCategory={activeCategory}
          showActiveCategory={true}
        />
      </div>
    </div>
  );
};

export default FaqPage;
