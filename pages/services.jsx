import { Store } from "@/context";
import Headers from "@/src/components/headers";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import Navigation from "@/src/components/navigation";
import { onmouseleave } from "@/src/custom-cursor";
import React from "react";
import ServiceCard from "@/src/components/common/serviceCard";
import Footer from "@/src/components/footer";
import { servicesData } from "@/data/services";
import Link from "next/link";
import MobileNavigation from "@/src/components/mobileNavigation";
import DownArrow from "@/src/components/common/DownArrow";

export default function Services() {
  const { height, width } = React.useContext(Store);
  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#1F1D1D] flex flex-col"
        style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
      >
        <Navigation isDark />
        <MobileNavigation isDark />
        <Headers isDark />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-white items-center lg:items-start flex flex-col w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] sm:text-[9vw] sm:leading-[11vw] text-[11vw] w-auto lg:leading-[4vw] lg:text-[3.3vw] flex flex-col lg:flex-row"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:flex-row">
                We nourish, innovate &amp; grow startups
              </div>
              <span className=" font-[Arial] items-center lg:items-start text-center lg:text-start"></span>
            </div>
            <span className=" font-[PPNeueMontreal] sm:w-[60%] lg:w-auto text-white  text-center lg:text-start leading-[1.5] lg:leading-[2vw] flex-col flex mt-10 lg:mt-[2vw] text-[4vw] sm:text-[2.4vw] lg:text-[1.5vw] tracking-wide font-[350]">
              {`We are uniquely positioned for new-age\n
               startups and with our top-notch services,\n
                we have the ability to take your business\n
                 to the next big level. `
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
        <DownArrow title={"Happy to serve"} isDark />
      </div>

      <div className="flex flex-col w-full relative bg-[#1F1D1D] py-[4vw] items-center">
        <div className=" lg:w-[60%] pb-28 lg:pb-[10vw] flex flex-col">
          {servicesData.map((data, i) => (
            <ServiceCard data={data} key={"sdasdder" + i} />
          ))}
        </div>
      </div>

      <div className="flex font-[PPNeueMontreal] pb-10 flex-col w-full relative bg-[#1F1D1D] py-[4vw] items-center">
        <div className=" w-[85%] h-[78vh] rounded-3xl bg-[#F0C808] flex flex-col lg:flex-row p-[3vw] px-16 lg:px-[6vw] justify-center space-y-10 lg:space-y-0 lg:justify-start items-center">
          <h1 className="flex text-xl lg:text-[2.2vw] text-center lg:text-start lg:leading-[2.5vw]">
            Let us partner and build your dream company together.
          </h1>
          <Link href={"mailto:gopal.batra@incubr.com"}>
            <h1 className="flex cursor-pointer text-7xl flex-col sm:flex-row text-center sm:text-start lg:text-[4.5vw] lg:ml-[4vw]">
              <span className="border-b border-[#1F1D1D] sm:mr-5">Connect</span>
              Today{" "}
            </h1>
          </Link>
        </div>
        <div className="h-[15vh]"></div>
      </div>
      <Footer />
    </div>
  );
}
