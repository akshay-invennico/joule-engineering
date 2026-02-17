import React from 'react';
import Card from './Card';
import { capabilitiesData } from './capabilitiesData';

const Cards = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-[100px]">
        {capabilitiesData.map((data, index) => (
          <Card
            key={index}
            {...data}
            variant={index % 3 === 0 ? 'large' : index % 3 === 1 ? 'medium' : 'small'}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;