import React from 'react'
import Hero from './Hero'
import Journey from './Journey'
import Clients from './Clients'
import Blogs from '@/components/shared/blogs/Blogs'
import CtaSection from '@/components/shared/Cta/CtaSection'

const page = () => {
  return (
    <div>
      <Hero />
      <Journey />
      <Clients />
      <Blogs />
      <CtaSection />
    </div>
  )
}

export default page