import React from 'react'
import Hero from './Hero'
import Facility from './Facility'
import CtaSection from './CtaSection'
import Capability from './Capability'
import FaqSection from '@/components/shared/faq/FaqSection'
import Operational from './Operational'

const page = () => {
  return (
    <div>
      <Hero />
      <Facility />
      <CtaSection />
      <Operational />
      <Capability />
      <FaqSection />
    </div>
  )
}

export default page