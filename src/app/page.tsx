import Blogs from '@/components/shared/blogs/Blogs'
import Capabilities from '@/components/shared/capabilities/Capabilities'
import CtaSection from '@/components/shared/Cta/CtaSection'
import Hero from '@/components/shared/hero/Hero'
import Industries from '@/components/shared/industries/Industries'
import LeadForm from '@/components/shared/leadform/LeadForm'
import Manufacturing from '@/components/shared/manufacturing/Manufacturing'
import Projects from '@/components/shared/projects/Projects'
import Story from '@/components/shared/story/Story'
import TestimonialSection from '@/components/shared/testimonial/TestimonialSection'
import React from 'react'

const page = () => {
  return (
    <main>
      <Hero />
      <Story />
      <Capabilities />
      <Manufacturing />
      <Projects />
      <Industries />
      <TestimonialSection />
      <LeadForm />
      <Blogs />
      <CtaSection />
    </main>
  )
}

export default page