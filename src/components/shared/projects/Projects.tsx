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
    if (index < projects.length - 1) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-3xl">
            <SubHeading text="Executed Projects" className='mb-3' color='#00AAA5' />
            <h2 className="text-[#0A2540] text-3xl md:text-4xl lg:text-[36px] font-bold leading-tight mb-5">
              Engineered For Success
            </h2>
            <p className="text-[#808080] text-sm md:text-base leading-relaxed max-w-2xl">
              We have successfully executed a wide range of industrial fabrication projects across sectors.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-primary font-bold text-sm"
            >
              <div className="bg-primary text-white p-2 rounded-full">
                <ArrowRight size={18} />
              </div>
              <span>View All Projects</span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${index} * (var(--slide-size) + 24px))`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-full md:min-w-[calc(50%-12px)] group flex items-stretch bg-white overflow-hidden cursor-pointer"
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
                    <h3 className="font-play text-[#0A2540] text-xl lg:text-2xl font-bold mb-6 uppercase tracking-wide leading-tight">
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
