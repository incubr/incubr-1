import React from "react";
import { Store } from "../../../context";
import TiltedArrow from "../../../assets/tiltedarrow.svg";
import SmallArrow from "@/assets/Vector (1).svg";
import Image from "next/image";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";
import Link from "next/link";
import { onMouseEnterOnTitle } from "./landing";

export default function About() {
  const { height } = React.useContext(Store);

  return (
    <div
      className=" bg-[#1F1D1D] text-white flex justify-center items-center"
      style={{ height }}
    >
      <div className="flex w-full flex-col justify-center  lg:flex-row">
        <div className="w-[100%] lg:w-[60%] flex flex-col lg:flex-row px-6 lg:px-0">
          <div
            className="flex flex-[1.5] w-full justify-center lg:justify-start items-center  lg:-mt-[5vw]"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            {/* <div className="w-[40%] hidden lg:flex justify-end mr-10">
              <Image src={TiltedArrow} />
            </div>
            <div className=" flex lg:hidden justify-end mr-10">
              <Image src={SmallArrow} />
            </div> */}
            <h1 className=" text-6xl sm:text-8xl lg:text-[7vw] items-center flex  font-[Arial]  cursor-pointer">
              <svg
                viewBox="0 0 82 82"
                fill="none"
                className=" h-[10vw] w-[10vw] sm:w-[4.5vw] mr-[4vw] lg:mr-[2vw] sm:h-[4.5vw]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M78.2322 0.792978C79.125 0.796194 79.98 1.15395 80.609 1.78755C81.2381 2.42114 81.5897 3.27868 81.5865 4.17151L81.441 44.5683C81.4378 45.4611 81.08 46.3161 80.4464 46.9451C79.8128 47.5742 78.9553 47.9258 78.0625 47.9225C77.1696 47.9193 76.3146 47.5616 75.6856 46.928C75.0566 46.2944 74.705 45.4368 74.7082 44.544L74.8244 12.2737L6.26744 80.3454C5.95332 80.6572 5.58085 80.9042 5.17129 81.0721C4.76174 81.24 4.32312 81.3256 3.88048 81.324C3.43784 81.3224 2.99984 81.2337 2.59151 81.0628C2.18317 80.8919 1.81249 80.6423 1.50062 80.3282C1.18876 80.0141 0.941814 79.6416 0.773896 79.2321C0.605978 78.8225 0.520372 78.3839 0.521966 77.9412C0.52356 77.4986 0.612323 77.0606 0.783187 76.6523C0.954051 76.2439 1.20367 75.8733 1.51779 75.5614L70.0815 7.49651L37.8112 7.38029C36.9184 7.37708 36.0634 7.01932 35.4343 6.38572C34.8053 5.75213 34.4537 4.8946 34.4569 4.00177C34.4601 3.10895 34.8179 2.25396 35.4515 1.62491C36.0851 0.995867 36.9426 0.644277 37.8354 0.647493L78.2322 0.792978Z"
                  fill="#F8F8F8"
                />
              </svg>
              WE DO
            </h1>
          </div>
          <div className="flex flex-col text-lg sm:text-2xl text-center lg:text-start lg:text-[1.5vw]">
            <div className="flex flex-col w-auto font-[PPNeueMontreal] mt-10">
              <div className="flex flex-col w-auto space-y-4 lg:space-y-[2vw] tracking-wider">
                <span className=" lg:border-b border-white pb-3 lg:pb-[2vw]">
                  WEB DESIGN &amp; DEVELOPMENT
                </span>
                <span className=" lg:border-b border-white pb-3 lg:pb-[2vw]">
                  BUILD BRAND ASSETS
                </span>
                <span className=" lg:border-b border-white pb-3 lg:pb-[2vw]">
                  FIND &amp; DEPLOY TECH. RESOURCES
                </span>
                <span className=" lg:border-b border-white pb-3 lg:pb-[2vw]">
                  TECHNOLOGY SUPPORT
                </span>
              </div>
              <div
                onMouseEnter={buttonMouseEnter}
                onMouseLeave={onmouseleave}
                className="flex text-white mt-16 cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black  font-bold tracking-wider"
              >
                <Link href={"/services"}>
                  <span className="p-2 px-8 border hover:border-[#F0C808] hover:bg-[#F0C808] border-white rounded-full">
                    &amp; much more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[20%]"></div> */}
      </div>
    </div>
  );
}
