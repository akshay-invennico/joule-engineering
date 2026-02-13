'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from './project';

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="block text-[#00AAA5] text-sm font-bold tracking-wider uppercase mb-3">
              Executed Projects
            </span>
            <h2 className="text-[#0A2540] text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              Engineered For Success
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              We have successfully executed a wide range of industrial fabrication projects across sectors.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-[#0A2540] font-bold text-sm hover:text-[#00AAA5] transition-colors"
            >
              <div className="bg-[#0A2540] text-white p-2 rounded-full group-hover:bg-[#00AAA5] transition-colors">
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
                className="min-w-full md:min-w-[calc(50%-12px)] group"
              >
                {/* Image */}
                <div className="h-[400px] md:h-[500px] relative bg-gray-100 rounded-3xl overflow-hidden rounded-tr-[80px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-[#0A2540] text-2xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-gray-400 group-hover:text-[#00AAA5] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#00AAA5] hover:text-[#00AAA5] disabled:opacity-50"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={index >= projects.length - 1}
            className="w-10 h-10 rounded-full border border-[#00AAA5] flex items-center justify-center text-[#00AAA5] hover:bg-[#00AAA5] hover:text-white disabled:opacity-50"
          >
            <ArrowRight size={18} />
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
