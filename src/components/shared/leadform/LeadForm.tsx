'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Loader2 } from 'lucide-react';
import capabilitiesImg from '../../../../public/assets/capabilities-img.png';
import SubHeading from '../subheading/SubHeading';
import toast from 'react-hot-toast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    terms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.terms) {
      toast.error('Please fill in all required fields and accept terms.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          terms: false,
        });
      } else {
        toast.error(data.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <SubHeading text="Help & Support" className='mb-3' color='#00AAA5' />
          <h2 className="text-4xl md:text-[36px] font-bold text-primary mb-4">
            Get In Touch With Us.
          </h2>
          <p className="text-[#808080] max-w-2xl">
            Our advanced facilities and expert team enable us to deliver customized solutions for your unique engineering needs.
          </p>
        </div>

        <div className="bg-[#F3F5FF] rounded-3xl p-5">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">

            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden">
              <Image
                src={capabilitiesImg}
                alt="Engineering worker"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <form className="space-y-5 py-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

                <div className="grid grid-cols-1 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white"
                    />
                  </div>
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write here..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00AAA5] focus:border-transparent text-gray-700 placeholder-gray-400 bg-white resize-none"
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-5 h-5 rounded text-[#00AAA5] focus:ring-[#00AAA5] border-gray-300 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer select-none">
                    I have read & accepted Terms & Conditions.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 text-[#005B96] font-bold hover:text-[#004A7A] transition-colors group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="w-10 h-10 rounded-full bg-[#005B96] text-white flex items-center justify-center group-hover:bg-[#004A7A] transition-colors">
                    {loading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
                  </span>
                  {loading ? 'Sending...' : 'Submit Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;