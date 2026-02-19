"use client";

import SubHeading from "@/components/shared/subheading/SubHeading";
import { useEffect, useState } from "react";
import operational1 from "../../../public/assets/infrastructure/operational1.jpg";
import operational2 from "../../../public/assets/infrastructure/operational2.jpg";
import operational3 from "../../../public/assets/infrastructure/operational3.jpg";
import operational4 from "../../../public/assets/infrastructure/operational4.jpg";

const data = [
  {
    title: "High-Capacity Lifting & Handling Systems",
    description:
      "The facility is equipped with heavy-duty cranes and material handling systems to manage oversized and high-weight components. These systems enable safe lifting, positioning, and structural alignment during fabrication and assembly stages.",
    image: operational1,
  },
  {
    title: "Fabrication Machinery & Technical Equipment",
    description:
      "Advanced fabrication machinery ensures precision manufacturing and structural assembly with high efficiency and operational safety standards.",
    image: operational2,
  },
  {
    title: "Material Storage & Traceability Systems",
    description:
      "Efficient storage systems allow systematic traceability and optimized material handling across departments.",
    image: operational3,
  },
  {
    title: "Strategic Industrial Infrastructure",
    description:
      "Purpose-built infrastructure supports large-scale industrial operations with compliance and safety integration.",
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = data.length - perView;

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
    <section className="bg-white py-20 px-6 lg:px-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
        <div>
          <SubHeading text="Operational Infrastructure" color="#00AAA5" />
          <h2 className="text-2xl md:text-[36px] font-semibold text-primary">
            Integrated Systems, Equipment & Compliance Framework
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-[#0F2B46] hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-[#0F2B46] hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / perView) * index}%)`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden mr-6 shrink-0 group"
              style={{
                width: `${100 / perView}%`,
                height: "420px",
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image.src})` }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <button
                onClick={() => toggleCard(i)}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md z-10 transition hover:scale-110"
              >
                {activeCard === i ? "×" : "+"}
              </button>

              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-lg font-semibold mb-3 max-w-md">
                  {item.title}
                </h3>

                <div
                  className={`transition-all duration-500 overflow-hidden ${activeCard === i
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
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
