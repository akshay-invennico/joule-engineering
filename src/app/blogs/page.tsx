'use client';

import React, { useMemo, useState } from 'react';
import Hero from './Hero';
import BlogCard from '@/components/shared/blogs/BlogCard';
import { blogsData } from '@/components/shared/blogs/blogsData';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All Articles');

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(blogsData.map((blog) => blog.category))
    );
    return ['All Articles', ...unique];
  }, []);

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All Articles') return blogsData;
    return blogsData.filter(
      (blog) => blog.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <>
      <Hero
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className='text-primary text-[28px] font-bold leading-[42px] mb-10'>All Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              No blogs found in this category.
            </div>
          )}

          <div className='text-primary text-right font-bold leading-[42px] mt-12 mb-10 cursor-pointer'>View more Articles</div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
