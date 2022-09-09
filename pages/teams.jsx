import NewDownArrow from "@/src/components/common/DownArrow";
import Footer from "@/src/components/footer";
import Headers from "@/src/components/headers";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import MobileNavigation from "@/src/components/mobileNavigation";
import Navigation from "@/src/components/navigation";
import { onmouseleave } from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";

const PeopleCard = () => {
  return (
    <div className="w-[20vw] h-[27vw] lg:w-[15vw] lg:h-[20vw] flex flex-col ">
      <div className="flex w-full rounded-xl h-full bg-gray-400"></div>
      <h1 className="mt-3 text-center text-[2.5vw] lg:text-[1.5vw]">Gopal Batra</h1>
      <span className="text-center text-[1.5vw] lg:text-[1vw] text-[#FFA400]">CEO</span>
    </div>
  );
};

export default function Teams() {
  return (
    <div className="w-full scroll-smooth">
      <div className="w-full relative bg-[#fff] flex h-screen flex-col">
        <Navigation />
        <MobileNavigation />
        <Headers />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[65%] text-black items-center lg:items-start flex flex-col w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw]  sm:text-[9.5vw] sm:leading-[11vw] w-auto sm:w-[90%] lg:w-full lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col text-center lg:text-start ">
                Team Members
              </div>
              {/* <span className=" font-[Arial]  text-center lg:text-start">
                
              </span> */}
            </div>
            <span className="flex w-[70%] lg:w-[80%] font-[PPNeueMontreal] text-center lg:text-start leading-[1.5] flex-col mt-[4vw] text-[4vw] sm:text-[2.4vw] lg:text-[1.8vw] lg:leading-[2.2vw] tracking-wide font-[350]">
              {`We know that finding a meaningful and rewarding job can be difficult at times. Our goal is to simplify that process for you. Ready to join the revolution? Browse through the available jobs and apply today. `
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <NewDownArrow title={"Let's start"} />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col items-center w-[65%] py-[3vw]">
          <div className="flex w-full mt-[3vw] justify-between">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
          <div className="flex w-full mt-[3vw] justify-between">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>

          <Link href={"/careers"}>
            <button
              className={`hidden w-60 mt-[5vw] button rounded-full tracking-wider hover:shadow-md  border border-black hover:border-none bg-[#fff] hover:bg-[#F0C808] text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl`}
            >
              Join our Team
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[15vh] lg:h-[20vh]"></div>
      <Footer  isDark />
    </div>
  );
}
