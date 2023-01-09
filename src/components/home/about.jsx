import React from "react";
import aboutpic from "@/assets/about.png";
import { onmouseleave } from "../../custom-cursor";
import Link from "next/link";
import { onMouseEnterOnTitle } from "./landing";
import { about_data } from "@/data/about";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-[80vh] lg:h-[60vh] my-[8vw] sm:my-[5vw] sm:h-[40vh] justify-center">
      <div className="flex flex-col border-b-2 w-[90%] lg:w-[80%]">
        <span className="flex lg:text-[2.6vw] text-[8vw] sm:text-[4.5vw] font-semibold h-[25%] items-center w-full justify-center">
          About Us
        </span>
        <div className="flex w-full md:flex-row flex-col sm:space-x-[4vw]">
          <div className="flex flex-col sm:w-[30%] items-center">
            <span className="flex justify-center w-[80%] mt-[4vw] sm:mt-0 sm:h-[18vh] lg:h-[35vh]">
              <div
                className="h-48 w-52 sm:w-full sm:h-full rounded-full bg-cover"
                style={{
                  backgroundImage: `url("/about.png")`,
                }}
              ></div>
            </span>
            <p className="flex w-full justify-center sm:h-[20%] items-center font-medium sm:text-[2.3vw] lg:text-[1.3vw] text-[4vw]">
              Gopal Batra
            </p>
          </div>
          <div className="flex sm:w-[70%] flex-col">
            <p className="flex w-full text-[4vw] sm:text-[2vw] font-[PPNeueMontreal] lg:text-[1.5vw] pt-[1vw] tracking-wider text-justify pb-5 sm:text-left sm:px-0 sm:mt-0  sm:my-10">
              Market entry is like a contact sport and cannot be fully assessed
              unless the stake holders are properly pitched and the product is
              evaluated to be fit or how to be made to fit. We basically do much
              beyond the basic primary research and offer both strategy and the
              execution which may be highly valuable to you. To bring more value
              to prospects, we do not charge for initial research and do active
              required spade work to help evaluate the depth of the market
              before you even sign us up. Please feel free to call us or connect
              through the contact information below. We’d be able to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
