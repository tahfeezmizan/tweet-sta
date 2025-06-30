import { SectionHeadProps } from "@/lib/common";
import React from "react";

export default function SectionHead({
  subheading,
  heading,
  highlight,
  buttonText,
  onButtonClick,
}: SectionHeadProps) {
  return (
    <div className="w-auto flex items-end justify-between gap-3">
      <div>
        <p className="text-base md:text-xl font-normal font-rancho ">{subheading}</p>
        <h2 className="text-2xl md:text-[40px] font-semibold font-poppins">
          {heading} <span className="text-[#ED6923]">{highlight}</span>
        </h2>
      </div>
      <button
        onClick={onButtonClick}
        className="text-base md:text-xl font-semibold font-poppins px-4 md:px-12 py-1 md:py-3 rounded-md text-[#ED6923] bg-transparent hover:text-white hover:bg-[#ED6923] border border-[#ED6923] transition-all duration-300 cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
}
