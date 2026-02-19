'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Blog } from './blogsData';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  blog: Blog;
  className?: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  className = '',
  onClick,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blogs/${blog.id}`)}
      className={`group cursor-pointer ${className}`}
    >
      <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-5 text-xs font-semibold text-[#808080]">
          <span>{blog.date}</span>
          <span className="w-px h-3 bg-gray-300"></span>
          <span>{blog.category}</span>
        </div>
      </div>

      <div className="pr-4">
        <h3 className="text-xl font-bold text-[#808080] mb-3 line-clamp-2">
          {blog.title}
        </h3>

        <div className="flex items-center gap-2 text-primary text-sm font-bold group/link">
          {blog.linkText}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
