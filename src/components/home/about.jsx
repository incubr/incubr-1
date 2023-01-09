import React from "react";
import aboutpic from "@/assets/about.png";
import {onmouseleave} from "../../custom-cursor";
import Link from "next/link";
import {onMouseEnterOnTitle} from "./landing";
import {about_data} from "@/data/about";
import Image from "next/image";


export default function About() {
  return (
    <div className="flex h-[55vh] sm:mb-0 mb-20 sm:h-[40vh] lg:h-[35vh] xl:h-[45vh] md:my-[5vw] md:h-[28vh] justify-center items-center">
      <div className="flex justify-center flex-col border-b-2 h-[40vh] sm:h-[20vh] w-[90%] lg:w-[80%]">
        <span className="flex lg:text-[3vw] md:text-[2.8vw] xl:text-[2.6vw] text-[8vw] sm:text-[5vw] font-semibold md:h-[25%] sm:h-[15%] items-center w-full justify-center">About Us</span>
        <div className="flex w-full md:flex-row flex-col space-x-[4vw]">
          <div className="flex md:w-[20%] mt-0 lg:mt-[-2vh] md:justify-start sm:justify-center w-full h-[10vh] items-center flex-col sm:h-[20vh]">
            <span className="flex justify-center md:h-[70%] md:w-[60%] h-[40%] w-[30%]">
              <Image src={aboutpic}
                alt="aboutPic"
                className="border border-black rounded-full"
                width={400}
                height={500}
                objectFit="cover"
              />
            </span>
            <p className="flex w-full justify-center sm:h-[20%] h-[10%] items-center font-medium md:text-[1.3vw] text-[4vw]">Gopal Batra</p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="flex w-full lg:w-[80%] text-[3vw] md:text-[1.4vw] sm:text-[2vw] lg:text-[1.5vw] pt-[1vw] tracking-wide px-3 text-center pb-5 sm:text-left sm:px-0 sm:mt-0 sm:my-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
