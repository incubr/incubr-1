import Image from "next/image";
import React from "react";
import Logo from "../../../assets/INCUBR.svg"

export default function Headers() {
  return (
    <div className="flex w-full justify-center absolute top-0 left-0">
      <div className="w-[85%] flex justify-between mt-16 2xl:mt-20">
        <Image src={Logo} />
        <button className="hidden button rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 lg:flex items-center justify-center text-xl">
          START A PROJECT
        </button>
      </div>
    </div>
  );
};
