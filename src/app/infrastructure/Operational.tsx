'use client';

import SubHeading from '@/components/shared/subheading/SubHeading';
import { useEffect, useState } from 'react';
import operational1 from '../../../public/assets/infrastructure/operational1.jpg';
import operational2 from '../../../public/assets/infrastructure/operational2.jpg';
import operational3 from '../../../public/assets/infrastructure/operational3.jpg';
import operational4 from '../../../public/assets/infrastructure/operational4.jpg';
import { ArrowLeft, ArrowRight, CircleX, Cross, Plus } from 'lucide-react';

const data = [
  {
    title: 'Lifting & Material Handling',
    description:
      'The facility is equipped with a 10 MT overhead crane and welding rotators with 10 MT and 20 MT capacities. These systems enable safe lifting, positioning, and rotation of heavy assemblies during fabrication and welding operations. Efficient material handling ensures stability, safety compliance, and accuracy throughout production.',
    image: operational1,
  },
  {
    title: 'Cutting & Forming Systems',
    description:
      'Our cutting and forming infrastructure includes a plate-bending machine capable of handling 2500 mm width and 25 mm thickness, along with plasma-cutting systems that process materials up to 75 mm thickness. Oxy-fuel cutting, circular band saws, and magnetic drilling machines support accurate shaping and dimensional control for structural and plate components.',
    image: operational2,
  },
  {
    title: 'Advanced Welding Infrastructure',
    description:
      'We operate multiple welding processes, including SAW (1000 Amps), MIG/SMAW (400 Amps), TIG (400 Amps), and AC/DC aluminium welding (500 Amps). This multi-process capability enables fabrication across mild steel, carbon steel, stainless steel, duplex stainless steel, and aluminium with consistent weld quality and structural strength.',
    image: operational3,
  },
  {
    title: 'Testing & Processing Systems',
    description:
      'Our infrastructure includes hydro testing pumps, a 200-ton hydraulic press, electrode and flux heating ovens, portable ovens, and industrial grinding equipment. These systems support inspection, finishing, and validation of fabricated assemblies before dispatch, ensuring structural integrity and compliance with specifications.',
    image: operational4,
  },
];

export default function Operational() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = data.length - 1;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const toggleCard = (i: number) => {
    if (activeCard === i) {
      setActiveCard(null);
    } else {
      setActiveCard(i);
    }
  };

  return (
    <section className="bg-white py-4 px-6 lg:px-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
        <div>
          <SubHeading text="Operational Infrastructure" color="#00AAA5" />
          <h2 className="text-2xl md:text-[36px] font-semibold text-primary">
            Advanced Systems Supporting Controlled Fabrication Execution
          </h2>
          <p className="text-[#808080] text-sm mt-2">
            Our operational strength is built on a combination of heavy-duty machinery, precision fabrication systems, advanced welding infrastructure, and integrated testing equipment that collectively support diverse industrial fabrication requirements.
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-[58px] h-[40px] px-5 py-2 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#808080] disabled:opacity-50 cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="w-[58px] h-[40px] px-5 py-2 rounded-full border border-primary flex items-center justify-center text-primary disabled:opacity-50 cursor-pointer"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(-${index} * (calc((100% - ${(perView - 1) * 24}px) / ${perView}) + 24px)))`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shrink-0 group"
              style={{
                width: `calc((100% - ${(perView - 1) * 24}px) / ${perView})`,
                height: '420px',
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image.src})` }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-lg font-semibold mb-3 max-w-[60%]">
                  {item.title}
                </h3>

                <button
                  onClick={() => toggleCard(i)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md z-10 transition hover:scale-110 cursor-pointer"
                >
                  {activeCard === i ? (
                    <CircleX size={20} color="#0063A2" />
                  ) : (
                    <Plus size={20} color="#0063A2" />
                  )}
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${activeCard === i
                    ? 'max-h-40 opacity-100'
                    : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-sm opacity-90 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
