'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import capabilitiesImg from '../../../../public/assets/capabilities-img.png';

const LeadForm = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#00AAA5]"></span>
            <span className="text-[#00AAA5] font-medium text-sm tracking-wider uppercase">Help & Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#072E4D] mb-4">
            Get In Touch With Us.
          </h2>
          <p className="text-gray-500 max-w-2xl font-light">
            Our advanced facilities and expert team enable us to deliver customized solutions for your unique engineering needs.
          </p>
        </div>

        <div className="bg-[#F3F5FF] rounded-3xl p-5">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden"
            >
              <Image
                src={capabilitiesImg}
                alt="Engineering worker"
                fill
                className="object-cover"
              />
              {/* Overlay to match the blueish tint in design if needed, strictly optional based on asset */}
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <form className="space-y-6">

                <div className="grid grid-cols-1 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white"
                    />
                  </div>
                  {/* Phone Number - Moved here to match typical flow or keep independent if design differs. Design shows Email then Phone. */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. example@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. +91 XXX XXX XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g. Want to collaborate with your team"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white resize-none"
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded text-[#00AAA5] focus:ring-[#00AAA5] border-gray-300 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer select-none">
                    I have read & accepted Terms & Conditions.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-[#005B96] font-bold hover:text-[#004A7A] transition-colors group mt-4"
                >
                  <span className="w-10 h-10 rounded-full bg-[#005B96] text-white flex items-center justify-center group-hover:bg-[#004A7A] transition-colors">
                    <ArrowRight size={20} />
                  </span>
                  Submit Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;