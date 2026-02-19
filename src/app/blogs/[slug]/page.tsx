'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb';
import { blogsData } from '@/components/shared/blogs/blogsData';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const BlogDetailsPage = () => {
  const params = useParams();
  const blogId = Number(params.slug);

  const blog = blogsData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Blog not found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">

        <Breadcrumb
          items={[
            { label: 'Blog & Updates', href: '/blogs' },
            { label: blog.title },
          ]}
          linkColor="#808080"
          textColor="black"
        />

        <h1 className="text-3xl md:text-[36px] font-bold text-primary mt-6 mb-6 max-w-4xl">
          {blog.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-[#808080] mb-8">
          <span>{blog.date}</span>
          <span className="w-px h-4 bg-gray-300"></span>
          <span>{blog.category}</span>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden mb-12">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-4xl text-[#808080] leading-relaxed space-y-6 text-lg">
          <p>
            In today’s rapidly evolving industrial landscape, technology is reshaping
            the way factories operate. From automation to AI-driven production
            monitoring, manufacturing processes are becoming more efficient,
            accurate, and scalable.
          </p>

          <p>
            Smart systems enable real-time data tracking, predictive maintenance,
            and improved quality control. This ensures reduced downtime,
            minimized waste, and optimized production cycles.
          </p>

          <h2 className="text-2xl font-bold text-black mt-10">
            Why It Matters
          </h2>

          <p>
            By integrating modern technology into factory workflows, companies
            can maintain competitive advantage while reducing operational costs.
            Sustainability goals also become more achievable through efficient
            energy usage and resource management.
          </p>

          <p>
            As innovation continues to accelerate, the factories of the future
            will rely heavily on digital transformation to drive growth and
            resilience.
          </p>
        </div>

        <div className="max-w-4xl text-[#808080] leading-relaxed space-y-6 text-lg">
          <p>
            In today’s rapidly evolving industrial landscape, technology is reshaping
            the way factories operate. From automation to AI-driven production
            monitoring, manufacturing processes are becoming more efficient,
            accurate, and scalable.
          </p>

          <p>
            Smart systems enable real-time data tracking, predictive maintenance,
            and improved quality control. This ensures reduced downtime,
            minimized waste, and optimized production cycles.
          </p>

          <h2 className="text-2xl font-bold text-black mt-10">
            Conclusion
          </h2>

          <p>
            By integrating modern technology into factory workflows, companies
            can maintain competitive advantage while reducing operational costs.
            Sustainability goals also become more achievable through efficient
            energy usage and resource management.
          </p>

          <p>
            As innovation continues to accelerate, the factories of the future
            will rely heavily on digital transformation to drive growth and
            resilience.
          </p>
        </div>

        <hr className="my-[28px] border border-[#E4E4E4]" />


        <div className='flex items-center justify-between'>
          <div className='font-extrabold leading-[24px]'> Share Article </div>

          <div>
            <div className="flex gap-3">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='my-[100px]'>
          <h1 className='text-primary text-[28px] font-bold leading-[42px] mb-10'>Related Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogsData.slice(0, 4).map((blog, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-4 text-xs font-semibold text-[#808080]">
                    <span>{blog.date}</span>
                    <span className="w-px h-3 bg-gray-300"></span>
                    <span>{blog.category}</span>
                  </div>
                </div>

                <div className="pr-4">
                  <h3 className="text-xl font-bold text-[#808080] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#005B96] text-sm font-bold group/link">
                    {blog.linkText}
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
