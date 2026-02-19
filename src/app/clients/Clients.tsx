import Image from 'next/image'
import React from 'react'

import lt from '../../../public/icons/L&T.svg'
import simem from '../../../public/icons/simem.svg'
import godrej from '../../../public/icons/godrej.svg'
import ITT from '../../../public/icons/ITT.svg'
import thermax from '../../../public/icons/thermax.svg'
import SubHeading from '@/components/shared/subheading/SubHeading'

const Clients = () => {
  const clientLogos = [
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
    { name: 'Larsen & Toubro', logo: lt },
    { name: 'Simem', logo: simem },
    { name: 'Godrej', logo: godrej },
    { name: 'ITT', logo: ITT },
    { name: 'Thermax', logo: thermax },
  ];
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="mb-3">
          <SubHeading text="Key Clients" color='#00AAA5' />
        </div>

        <h2 className="text-[#0063A2] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-[60px]">
          Organizations We Have Served
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-5 items-center justify-items-center mb-8">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="relative grayscale"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients