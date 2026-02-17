import React from 'react';
import Image from 'next/image';
import boxes from '../../../../public/icons/boxes.svg';

interface CardProps {
  step: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ step, title, description }) => {
  return (
    <div className="relative bg-[#F3F5FF] rounded-lg p-6 pt-14 border border-[#E4E4E4] w-full md:w-[350px] lg:w-[345px] h-full flex flex-col items-start gap-4">

      <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-white rounded-full px-6 py-2 border border-[#E4E4E4] flex items-center justify-center">
        <span className="text-[#00A99D] font-bold text-sm tracking-wide uppercase">
          STEP : {step}
        </span>
        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-100"></div>
      </div>

      <div className="absolute top-0 right-0">
        <Image
          src={boxes}
          alt="decorative boxes"
          width={60}
          height={60}
        />
      </div>

      <div className="mt-4 space-y-3">
        <h3 className="text-2xl font-bold leading-tight w-[80%]">
          {title}
        </h3>
        <p className="text-[#808080]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;