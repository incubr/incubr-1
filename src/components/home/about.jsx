import React from "react";
import { Store } from "../../../context";
import TiltedArrow from "../../../assets/tiltedarrow.svg";
import SmallArrow from "@/assets/Vector (1).svg";
import Image from "next/image";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";
import Link from "next/link";

export default function About() {
  const { height } = React.useContext(Store);

  const onMouseEnter = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "12rem";
    customCursor.style.height = "12rem";
    customCursor.classList.replace("bg-black", "bg-white");
    customCursor.classList.replace("bg-opacity-25", "bg-opacity-100");
    customCursor.innerHTML = `<span className="font-bold font-[PPNeueMontreal] tracking-wider">explore</span><span className="font-bold font-[PPNeueMontreal] tracking-wider">furthur</span>`;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onmouseleave}
      className=" bg-[#1F1D1D] text-white flex justify-center items-center"
      style={{ height }}
    >
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-[100%] flex flex-col lg:flex-row px-6 lg:px-0">
          <div className="flex flex-[1.5] w-full justify-center items-center  lg:-mt-[5vw]">
            <div className="w-[40%] hidden lg:flex justify-end mr-10">
              <Image src={TiltedArrow} />
            </div>
            <div className=" flex lg:hidden justify-end mr-10">
              <Image src={SmallArrow} />
            </div>
            <h1 className=" text-6xl sm:text-8xl lg:text-[7vw]  font-[Arial] lg:flex-1 cursor-pointer">
              WE DO
            </h1>
          </div>
          <div className="flex flex-1 flex-col text-lg sm:text-2xl text-center lg:text-start lg:text-[1.5vw]">
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
                onMouseLeave={onMouseEnter}
                className="flex text-white mt-16 cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-[#F0C808]  font-bold tracking-wider"
              >
                <Link href={"/services"}>
                  <span className="p-2 px-8 border hover:border-[#F0C808] border-white rounded-full">
                    &amp; much more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </div>
  );
}
