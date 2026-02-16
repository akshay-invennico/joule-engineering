'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from './data';
import quote from '../../../../public/icons/quote.svg';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-linear-to-r from-primary to-[#0A1A2F] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image src={quote} alt="Quote" width={82} height={74} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-[#00AAA5] text-xl font-bold mb-6">
                {testimonials[activeIndex].highlight}
              </h3>

              <blockquote className="text-white text-lg md:text-xl leading-relaxed italic mb-12 font-light">
                {testimonials[activeIndex].quote}
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="border-t border-gray-700 w-full mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h4 className="text-white font-bold text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex -space-x-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${index === activeIndex
                    ? 'border-[#00AAA5] scale-110 z-10'
                    : 'border-transparent z-0 opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;