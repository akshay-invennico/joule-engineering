'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { blogsData } from './blogsData';

const Blogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#00AAA5]"></span>
              <span className="text-[#00AAA5] font-medium text-sm tracking-wider uppercase">Our Blog & Article</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#072E4D]">
              Factory Trends & Updates
            </h2>
          </div>

          {/* Navigation Buttons (Visual only for now as requested grid layout) */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#00AAA5] hover:text-[#00AAA5] transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#00AAA5] hover:text-[#00AAA5] transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Date & Category Overlay */}
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-tr-xl flex items-center gap-4 text-xs font-semibold text-[#072E4D]">
                  <span>{blog.date}</span>
                  <span className="w-px h-3 bg-gray-300"></span>
                  <span>{blog.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pr-4">
                <h3 className="text-xl font-bold text-[#072E4D] mb-3 line-clamp-2 group-hover:text-[#00AAA5] transition-colors">
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