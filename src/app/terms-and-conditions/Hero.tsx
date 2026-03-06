'use client';

import React from 'react';

interface Data {
  title: string;
  subtitle: string;
  paragraph: string;
}

const data: Data = {
  title: 'Terms & Conditions',
  subtitle: 'Effective Date: March 2026',
  paragraph:
    'Welcome to Joule Engineering Works. By accessing or using the website https://jouleengineeringworks.com, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using the website. If you do not agree with these terms, you should not use this website.',
};

const Hero = () => {
  const { title, subtitle, paragraph } = data;

  return (
    <div className="bg-[#F3F5FF] md:min-h-[344px] w-full flex items-center justify-between py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          <div className="flex-1 min-w-0 pr-0 md:pr-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[36px] font-semibold text-black mb-4 leading-[48px]">
              {title}
            </h1>
            <div className="flex flex-col items-start space-y-4 text-[#808080] font-medium text-lg">
              <div>
                <p className="text-[#808080]">{subtitle}</p>
              </div>
              <div>
                <p className="text-[#808080] text-base">{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
