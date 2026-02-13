"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "../button/Button";
import routes from "@/app/routes";

interface ProductCardProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  material?: string;
  thicknessRange?: string;
  applications?: string;
  buttonLabel?: string;
  className?: string;
  slug?: string | number; 
}

const ProductCard = ({
  title,
  subtitle,
  imageSrc,
  material,
  thicknessRange,
  applications,
  className = "",
  slug
}: ProductCardProps) => {
  const router = useRouter();

  const handleClick = () => {
  if (!slug) return;
  router.push(`${routes.products}/${slug}`);
};

  return (
    <div
      onClick={handleClick}
      className={`group bg-black text-white rounded-lg p-5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 cursor-pointer ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          {subtitle && (
            <p className="text-sm font-medium text-gray-300">{subtitle}</p>
          )}
        </div>

        <Button
          type="button"
          aria-label="More"
          className="bg-[#009FE3] hover:bg-[#BEE3F3] rounded-full p-2 transition-colors duration-300"
        >
          <ArrowUpRight
            size={20}
            color="#FFFFFF"
            className="block group-hover:hidden transition-transform duration-300"
          />
          <ArrowRight
            size={20}
            color="#FFFFFF"
            className="hidden group-hover:block transition-transform duration-300"
          />
        </Button>
      </div>

      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="space-y-2 text-sm">
        {material && (
          <p>
            <span className="font-semibold">Material:</span> {material}
          </p>
        )}
        {thicknessRange && (
          <p>
            <span className="font-semibold">Thickness Range:</span>{" "}
            {thicknessRange}
          </p>
        )}
        {applications && (
          <p>
            <span className="font-semibold">Applications:</span>{" "}
            {applications}
          </p>
        )}
      </div>

      {/* Decorative dots */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-[#BEE3F3] rounded-full" />
      <div className="absolute top-2 right-2 w-1 h-1 bg-[#BEE3F3] rounded-full" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#BEE3F3] rounded-full" />
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#BEE3F3] rounded-full" />
    </div>
  );
};

export default ProductCard;