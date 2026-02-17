import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  subTitle: string;
  listItems: string[];
  bottomText: string;
  image: StaticImageData | string;
  imageAlt: string;
  reverse?: boolean;
  variant?: 'large' | 'medium' | 'small';
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  subTitle,
  listItems,
  bottomText,
  image,
  imageAlt,
  reverse = false,
  variant,
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/2 space-y-5">
        <h2 className="text-2xl md:text-[32px] font-bold text-primary">
          {title}
        </h2>
        <p className="text-[#808080] font-normal">
          {description}
        </p>

        <div className="space-y-5">
          <h3 className="text-lg font-bold text-[#808080]">
            {subTitle}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start font-bold text-[#808080]">
                <span className="mr-2 mt-1.5 w-2 h-2 min-w-[8px] rounded-full bg-[#00A99D]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[#808080]">
          {bottomText}
        </p>
      </div>

      <div className={`w-full lg:w-[568px] relative h-[300px] md:h-[560px] overflow-hidden`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Card;