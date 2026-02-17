'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
  images: (StaticImageData | string)[];
  title: string;
  client: string;
  projectType: string;
  description?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title, client, projectType, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-8 group">
          <Image
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <h1 className="text-[#0063A2] text-3xl md:text-4xl lg:text-[44px] font-bold uppercase leading-tight max-w-3xl">
            {title}
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#0063A2] hover:text-white hover:border-[#0063A2] transition-colors duration-300"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#0063A2] flex items-center justify-center text-[#0063A2] hover:bg-[#0063A2] hover:text-white transition-colors duration-300"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-gray-200 pt-8">
          <div>
            <span className="block text-gray-500 font-bold mb-2 text-sm uppercase tracking-wide">
              Client:
            </span>
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              {client}
            </p>
          </div>

          <div>
            <span className="block text-gray-500 font-bold mb-2 text-sm uppercase tracking-wide">
              Project Type:
            </span>
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              {projectType}
            </p>
          </div>

          {description && (
            <div className="md:col-span-2">
              <span className="block text-gray-500 font-bold mb-2 text-sm uppercase tracking-wide">
                Description:
              </span>
              <p className="text-gray-900 text-base">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Carousel;