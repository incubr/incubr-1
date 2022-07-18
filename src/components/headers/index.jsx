import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/INCUBR.svg";
import DarkLogo from "@/assets/darkIncubr.svg";

export default function Headers() {
  return (
    <div className="flex w-full justify-center absolute top-0 left-0">
      <div className="w-[90%] sm:w-[85%] flex justify-between mt-16 2xl:mt-20">
        <Link href={"/"}>
          <Image src={Logo} className=" cursor-pointer" />
        </Link>
        <Link href={"/start-a-project"}>
          <button className="hidden button rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl">
            START A PROJECT
          </button>
        </Link>
      </div>
    </div>
  );
}

export const DarkHeaders = () => {
  return (
    <div className="flex w-full justify-center absolute top-0 left-0">
      <div className="w-[90%] sm:w-[85%] flex justify-between mt-16 2xl:mt-20">
        <Link href={"/"}>
          <Image src={DarkLogo} className=" cursor-pointer" />
        </Link>
        <Link href={"/start-a-project"}>
          <button className="hidden button rounded-full tracking-wider hover:shadow-md text-[#1F1D1D] bg-[#fff] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl">
            START A PROJECT
          </button>
        </Link>
      </div>
    </div>
  );
}
