'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { blogsData } from './blogsData';
import SubHeading from '../subheading/SubHeading';

const Blogs = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < blogsData.length - 1) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl">
            <SubHeading text="Our Blog & Article" className='mb-3' color='#00AAA5' />
            <h2 className="text-4xl md:text-[36px] font-bold text-primary">
              Factory Trends & Updates
            </h2>
          </div>

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
              disabled={index >= blogsData.length - 1}
              className="w-[58px] h-[40px] px-5 py-2 rounded-full border border-primary flex items-center justify-center text-primary disabled:opacity-50 cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogsData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* Date & Category Overlay */}
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-4 text-xs font-semibold text-[#808080]">
                  <span>{blog.date}</span>
                  <span className="w-px h-3 bg-gray-300"></span>
                  <span>{blog.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pr-4">
                <h3 className="text-xl font-bold text-[#808080] mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-2 text-[#005B96] text-sm font-bold group/link">
                  {blog.linkText}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;