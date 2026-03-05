'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from './project';
import SubHeading from '../subheading/SubHeading';

const Projects = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < projects.length - 1) setIndex(prev => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(prev => prev - 1);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-3xl">
            <SubHeading
              text="Executed Projects"
              className="mb-3"
              color="#00AAA5"
            />
            <h2 className="text-primary text-3xl md:text-4xl lg:text-[36px] font-bold leading-tight mb-5">
              Delivered Work Highlights
            </h2>
            <p className="text-[#808080] text-sm md:text-base leading-relaxed max-w-2xl">
              We have executed a wide range of fabricated equipment and assemblies across industries, including pressure vessels, cryogenic outer jackets, pump base frames, structural frames, and plant components.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group group-hover:text-white relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
            >
              {/* Expanding Background */}
              <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-primary rounded-full transition-all duration-500 ease-in-out z-0" />

              {/* Text Wrapper */}
              <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
                <span className="text-sm font-semibold text-primary group-hover:text-white transition-colors duration-500 ease-in-out">
                  View All Projects
                </span>
              </span>

              {/* Arrow Wrapper */}
              <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-white transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x:
                typeof window !== 'undefined' && window.innerWidth >= 768
                  ? `-${index * 50}%`
                  : `-${index * 100}%`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map(project => (
              <div
                key={project.id}
                className="min-w-full md:min-w-1/2 group flex items-stretch bg-white overflow-hidden cursor-pointer md:pr-6 last:pr-0"
              >
                <div className="w-1/2 relative min-h-[380px]">
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                </div>

                <div className="w-1/2 px-5 pt-5 flex flex-col justify-between relative bg-white">
                  <div className="absolute top-6 right-6 text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                    <ArrowUpRight size={24} />
                  </div>

                  <div className="mt-8 flex flex-col h-full justify-end">
                    <h3 className="font-play text-[#0A2540] text-xl lg:text-2xl font-bold mb-6 tracking-wide leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-[10px] lg:text-[14px] border border-[#E4E4E4] rounded-full px-5 py-3 text-[#808080]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <hr className="my-8 border-[#E4E4E4]" />

        {/* Controls */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-[58px] h-[40px] px-5 py-2 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#808080] disabled:opacity-50 cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={index >= projects.length - 1}
            className="w-[58px] h-[40px] px-5 py-2 rounded-full border border-primary flex items-center justify-center text-primary disabled:opacity-50 cursor-pointer"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Responsive slide size */}
      <style jsx global>{`
        :root {
          --slide-size: 100%;
        }
        @media (min-width: 768px) {
          :root {
            --slide-size: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
