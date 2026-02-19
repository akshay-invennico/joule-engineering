import React from 'react'
import Hero from './Hero'
import Clients from './Clients'
import TestimonialSection from '@/components/shared/testimonial/TestimonialSection'
import Industries from '@/components/shared/industries/Industries'
import Projects from '@/components/shared/projects/Projects'
import CtaSection from '@/components/shared/Cta/CtaSection'

const page = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <TestimonialSection />
      <Industries />
      <Projects />
      <CtaSection />
    </div>
  )
}

export default page