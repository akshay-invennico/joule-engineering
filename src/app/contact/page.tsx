import React from 'react'
import Hero from './Hero'
import LeadForm from '@/components/shared/leadform/LeadForm'
import Clients from '../about/Clients'

const page = () => {
  return (
    <div>
      <Hero />
      <LeadForm />
      <Clients />
    </div>
  )
}

export default page