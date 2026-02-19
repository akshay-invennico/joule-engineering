import React from 'react'
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import lt from '../../../public/icons/L&T.svg'
import simem from '../../../public/icons/simem.svg'
import godrej from '../../../public/icons/godrej.svg'
import ITT from '../../../public/icons/ITT.svg'
import thermax from '../../../public/icons/thermax.svg'

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
  ];
  return (
    <div className="mx-auto max-w-6xl py-24">
      <h3 className="text-primary text-2xl md:text-3xl font-bold text-left mb-10">
        Trusted by Leading Industrial & EPC Organizations
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center mb-8">
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

      <div className="text-center">
        <button className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
          <span>View All Clients</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default Clients