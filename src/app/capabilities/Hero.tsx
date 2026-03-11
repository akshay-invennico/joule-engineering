import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/assets/capabilities-hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[850px] overflow-hidden bg-[#F8F9FA]">

      {/* Background Image */}
      <Image
        src={HeroImg}
        alt="Industrial Worker with fabrication machinery"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 w-full bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">

          {/* Left Content */}
          <div className="w-full lg:w-[65%] py-16 lg:pt-[74px] lg:pb-16 lg:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary mb-5">
              Engineering Capabilities
            </h1>

            <p className="text-[#808080] text-sm md:text-base lg:text-[17px] max-w-2xl">
              At Joule Engineering Works, engineering is not separate from
              fabrication. We design the build path before metal is cut, so
              fit-up, handling, welding, and inspection stay under control.
              This approach suits EPC teams and plant owners who need equipment
              delivered ready for installation, not rework.
            </p>
          </div>

          {/* Right Decorative Section (Hidden on small devices) */}
          <div className="hidden lg:flex lg:w-[35%] relative flex-col items-center">

            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-6 w-px bg-[#CCCCCC]" />

            {/* Rotating Circle */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <div className="relative w-40 h-40 flex items-center justify-center rounded-full border border-[#233AFF33] bg-white shadow-sm">

                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>

                    <text fontSize="11.5" fontWeight="500" letterSpacing="2px">
                      <textPath
                        xlinkHref="#circlePath"
                        className="uppercase font-medium"
                      >
                        Brand • Strategy • Design •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="relative z-10 w-20 h-20 rounded-full border border-[#233AFF33] flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center justify-center text-[#0063A2]">
                    <div className="w-2 h-2 bg-[#0063A2] rounded-full mb-1"></div>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;