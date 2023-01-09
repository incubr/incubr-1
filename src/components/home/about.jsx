import React from "react";
import aboutpic from "@/assets/about.png";
import {onmouseleave} from "../../custom-cursor";
import Link from "next/link";
import {onMouseEnterOnTitle} from "./landing";
import {about_data} from "@/data/about";
import Image from "next/image";


export default function About() {
  return (
    <div className="flex h-[70vh] lg:h-[35vh] xl:h-[45vh] my-0 md:my-6 md:h-[28vh] justify-center">
      <div className="flex flex-col border-b-2 w-[96%]">
        <span className="flex lg:text-[3vw] md:text-[2.8vw] xl:text-[3vw] 2xl:text-[2vw] text-[8vw] sm:text-[5vw] font-semibold h-[25%] items-center w-full justify-center">About Us</span>
        <div className="flex w-full md:flex-row flex-col">
          <div className="flex md:w-[20%] mt-0 lg:mt-[-2vh] justify-start w-full items-center flex-col">
            <span className="flex justify-center h-[70%] w-[60%]">
              <Image src={aboutpic}
                alt="aboutPic"
                width={200}
              />
            </span>
            <p className="flex w-full justify-center h-[20%] items-center font-medium md:text-[1.3vw] text-[4vw]">Gopal Batra</p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="flex w-full lg:w-[80%] px-3 text-center pb-5 sm:text-left sm:px-0 mt-[-1vh] sm:mt-0  sm:my-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
