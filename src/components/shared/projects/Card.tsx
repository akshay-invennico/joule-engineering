import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  client: string;
  category: string;
  image: string | StaticImageData;
  slug: string;
}

const Card: React.FC<ProjectCardProps> = ({ title, client, category, image, slug }) => {
  return (
    <Link href={`/${slug}`} className="block group relative w-full h-[400px] rounded-lg overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">

        <div className="mb-2">
          <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-[6px] rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-gray-300 text-sm md:text-base font-medium">
          Client: <span className="text-white">{client}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;