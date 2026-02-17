import React from 'react';
import Hero from './Hero';
import Cards from '@/components/shared/capabilities/Cards';
import Excellence from '@/components/shared/capabilities/Excellence';
import Execution from '@/components/shared/execution/Execution';
import ExecutionCta from '@/components/shared/execution/ExecutionCta';
import FaqSection from '@/components/shared/faq/FaqSection';
import LeadForm from '@/components/shared/leadform/LeadForm';

const page = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Excellence />
      <Execution />
      <ExecutionCta />
      <LeadForm />
      <FaqSection />
    </div>
  );
};

export default page;