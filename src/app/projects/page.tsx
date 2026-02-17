import React from 'react';
import Hero from './Hero';
import Cards from '@/components/shared/projects/Cards';
import FaqSection from '@/components/shared/faq/FaqSection';

const page = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <FaqSection />
    </div>
  );
};

export default page;