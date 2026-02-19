import Image from "next/image";
import Link from "next/link";
import heroImg from '../../../public/assets/about.jpg'

const stats = [
  { value: "20+", label: "Years of Fabrication Experience" },
  { value: "100+", label: "Projects Executed" },
  { value: "50+", label: "Clients Served" },
];

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <h1 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-[44px]">
              Engineering-Driven Fabrication Solutions
            </h1>

            <div className="flex items-start gap-x-[28px] mt-5">
              <div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border rounded-full border-[#233AFF33]">
                  <div className="absolute inset-0 animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text fontSize="11.5" fontWeight="500" letterSpacing="2px" fill="#000000">
                        <textPath xlinkHref="#circlePath" className="uppercase font-medium">
                          Brand • Strategy • Design •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#233AFF33] flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center justify-center text-[#0063A2]">
                      <div className="w-2 h-2 bg-[#0063A2] rounded-full mb-1"></div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[150px] w-px bg-[#E4E4E4]" />
              <p className="max-w-2xl text-base leading-relaxed text-[#808080] sm:text-lg">
                Joule Engineering Works is a Gujarat-based engineering and
                manufacturing company specializing in heavy fabrication and
                process equipment for industrial applications. We support EPC
                companies, OEMs, and industrial clients with structured
                engineering practices and disciplined fabrication execution.
              </p>
            </div>

            <div className="mt-5">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-primary font-medium"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200">
                  →
                </span>
                <span>More About Us</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-[32px] font-bold leading-[42px] text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[#808080] leading-relaxed">
                    {stat.label}
                  </p>

                  <div className="h-px w-full bg-[#E4E4E4] mt-[26px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src={heroImg}
              alt="Engineers reviewing fabrication plans"
              width={1600}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
