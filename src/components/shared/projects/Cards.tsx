'use client';

import React, { useState } from 'react';
import Card from './Card';
import { projectData, categories } from './projectData';
import SubHeading from '../subheading/SubHeading';

const Cards = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-6">
          <SubHeading text="Project Portfolio" className="mb-3" color="#00AAA5" />
          <h2 className="text-primary text-3xl md:text-4xl lg:text-[32px] font-bold">
            Our Project
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${activeCategory === category
                ? 'bg-[#EBF5FF] text-primary border-[#EBF5FF]'
                : 'bg-transparent text-[#808080] border-transparent hover:bg-gray-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              client={project.client}
              category={project.category}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;