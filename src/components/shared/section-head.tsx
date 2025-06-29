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
    <div className="flex items-end justify-between">
      <div>
        <p className="text-xl font-normal font-rancho ">{subheading}</p>
        <h2 className="text-[40px] font-semibold font-poppins">
          {heading} <span className="text-[#ED6923]">{highlight}</span>
        </h2>
      </div>
      <button
        onClick={onButtonClick}
        className="text-xl font-semibold font-poppins px-12 py-3 rounded-md text-[#ED6923] bg-white border border-[#ED6923]"
      >
        {buttonText}
      </button>
    </div>
  );
}
