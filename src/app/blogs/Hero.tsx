'use client';

import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/contact-bg.png';
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb';

interface HeroProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Hero: React.FC<HeroProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <section className="relative w-full min-h-[476px] flex items-center overflow-hidden py-16">
      <div className="absolute inset-0 w-full h-[476px] z-0">
        <Image
          src={heroBg}
          alt="Industrial projects background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-8 max-w-3xl">
          <Breadcrumb
            items={[{ label: 'Blogs & Updates', href: '/blogs' }]}
            linkColor="black"
            textColor="black"
          />

          <h2 className="text-3xl md:text-[36px] font-bold text-primary mb-4">
            Stay Informed with Updates
          </h2>

          <p className="text-[#808080]">
            Explore the latest articles and resources to stay ahead in the world
            of factory automation and engineering solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-6 py-3 rounded-full text-base font-extrabold leading-6 cursor-pointer
                ${activeCategory === cat
                  ? 'text-primary border border-primary'
                  : 'text-[#808080]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
