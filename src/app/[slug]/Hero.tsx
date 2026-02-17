'use client';

import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb';

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  const breadcrumbItems = [
    { label: 'Projects', href: '/projects' },
    { label: title, href: '#' }
  ];

  return (
    <section className="w-full pt-10 pb-6 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumb items={breadcrumbItems} textColor="black" linkColor="gray" />
      </div>
    </section>
  );
};

export default Hero;