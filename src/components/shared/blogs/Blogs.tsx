import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { blogsData } from './blogsData';
import SubHeading from '../subheading/SubHeading';
import Link from 'next/link';
import routes from '@/app/routes';

const Blogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-6">
          <div className="max-w-xl">
            <SubHeading text="Our Blog & Article" className='mb-3' color='#00AAA5' />
            <h2 className="text-4xl md:text-[36px] font-bold text-primary">
              Factory Trends & Updates
            </h2>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <div className="hidden md:block">
              <Link
                href={routes.blogs}
                className="group group-hover:text-white relative inline-flex items-center justify-center rounded-full transition-all duration-500 h-[46px] overflow-hidden leading-none"
              >
                {/* Expanding Background */}
                <span className="absolute left-0 top-0 bottom-0 w-[46px] group-hover:w-full bg-primary rounded-full transition-all duration-500 ease-in-out z-0" />

                {/* Text Wrapper */}
                <span className="relative z-10 flex items-center h-full pl-[56px] pr-[24px] group-hover:pl-[24px] group-hover:pr-[56px] transition-all duration-500 ease-in-out">
                  <span className="text-sm font-semibold text-primary group-hover:text-white transition-colors duration-500 ease-in-out">
                    View more Updates
                  </span>
                </span>

                {/* Arrow Wrapper */}
                <span className="absolute left-0 top-0 w-[46px] h-[46px] flex items-center justify-center text-white transition-all duration-500 ease-in-out z-20 group-hover:left-[calc(100%-46px)]">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>

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
    </section>
  );
};

export default Blogs;