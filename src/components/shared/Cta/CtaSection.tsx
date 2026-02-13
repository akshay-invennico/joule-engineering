'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-20 bg-[#00AAA5] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-white mb-10 lg:mb-0"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-white/60"></span>
              <span className="text-white/80 font-medium text-sm tracking-wider uppercase">Building Your Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Let&apos;s Build Dream Something Amazing.
            </h2>

            <button className="group flex items-center gap-3 text-white font-bold text-lg hover:opacity-90 transition-opacity">
              <span className="w-12 h-12 rounded-full bg-white text-[#00AAA5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={24} />
              </span>
              <span>Start Journey</span>
            </button>
          </motion.div>

          {/* Decorative/Background Image Area on Right */}
          {/* Since we don't have the exact line art, using a subtle industrial pattern or placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden opacity-20 mix-blend-overlay"
          >
            <Image
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070"
              alt="Industrial Background Pattern"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Background decoration circles/elements if needed to match strictly, but simple color + image is good for now */}
    </section>
  );
};

export default CtaSection;