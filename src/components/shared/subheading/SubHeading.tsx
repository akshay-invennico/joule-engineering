import React from "react";

interface SubHeadingProps {
  text: string;
  color?: string;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
  color = "#00AAA5",
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        style={{
          width: "40px",
          height: "0px",
          borderTop: `1px solid ${color}`,
          opacity: 1,
        }}
        className="opacity-100"
      />

      <span
        className="font-play text-[14px] leading-[22px] font-normal tracking-[0%] align-middle"
        style={{ color: color }}
      >
        {text}
      </span>
    </div>
  );
};

export default SubHeading;
