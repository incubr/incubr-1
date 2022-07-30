import { Store } from "@/context";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import { onmouseleave } from "@/src/custom-cursor";
import React from "react";
import Navigation from "@/src/components/navigation";
import Headers from "@/src/components/headers";
import WorkCard from "@/src/components/common/workcard";
import Footer from "@/src/components/footer";
import { work } from "@/data/work";
import Link from "next/link";
import MobileNavigation from "@/src/components/mobileNavigation";
import DownArrow from "@/src/components/common/DownArrow";

export default function Work() {
  const { height, width } = React.useContext(Store);

  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#1F1D1D] flex flex-col"
        style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
      >
        <Navigation isDark />
        <Headers isDark />
        <MobileNavigation isDark />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-white items-center lg:items-start flex flex-col w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw] sm:text-[9.5vw] sm:leading-[11vw] w-auto sm:w-[80%] lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col text-center lg:text-start ">
                Featured Case Studies
              </div>
              <span className=" font-[Arial]  text-center lg:text-start"></span>
            </div>
            <span className=" font-[PPNeueMontreal] sm:w-[60%] lg:w-auto text-white  text-center lg:text-start leading-[1.5] lg:leading-[2vw] lg:mt-[2vw] flex-col flex mt-10 text-[4vw] sm:text-[2.4vw] lg:text-[1.5vw] tracking-wide font-[350]">
              {`From new ideas we tested to client successes,\n
               read our case studies to find out how we've\n
                assisted companies in a variety of industries\n
                 to alter their operations and stay on top of the\n
                  rapidly changing marketplace.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
            <div className=" flex justify-center">
              <Link href={"/start-a-project"}>
                <button className="sm:hidden mt-[8vw] button rounded-full tracking-wider hover:shadow-md text-black bg-[#fff] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 flex items-center justify-center text-xl">
                  START A PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <DownArrow title={"Scroll down"} isDark />
      </div>

      <div className="w-full flex bg-[#1F1D1D] justify-center pb-20 ">
        <div className=" w-full sm:w-[60%] lg:w-[60%] flex mt-10 lg:mt-[4vw] flex-col lg:space-y-[8vw] ">
          {work.map((i, index) => (
            <WorkCard
              data={i}
              key={"sadasder" + i.id}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <div className="w-full sm:h-60 bg-[#1F1D1D] "></div>
      <Footer />
    </div>
  );
}
