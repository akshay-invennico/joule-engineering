'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SubHeading from '../subheading/SubHeading';
import ctaBg from '../../../../public/assets/cta-bg.png'

const CtaSection = () => {
  return (
    <section className="relative bg-[#00AAA5] overflow-hidden">
      <div className="container mx-auto px-4 lg:pl-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-white mb-10 lg:mb-0"
          >
            <SubHeading text="Building Your Vision" className='mb-3' color='white' />
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-bold mb-8 leading-tight">
              Let&apos;s Build Dream Something Amazing.
            </h2>

            <button className="group flex items-center gap-3 text-white font-bold text-lg cursor-pointer">
              <span className="w-12 h-12 rounded-full bg-white text-[#00AAA5] flex items-center justify-center">
                <ArrowRight size={24} />
              </span>
              <span>Start Journey</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden opacity-20 mix-blend-overlay"
          >
            <Image
              src={ctaBg}
              alt="Industrial Background Pattern"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default CtaSection;