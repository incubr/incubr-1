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
  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#1F1D1D] flex h-[95vh] sm:h-screen flex-col"
        >
        <Navigation isDark />
        <MobileNavigation isDark />
        <Headers isDark />
        <div className="flex flex-1 justify-center lg:mt-[2vw] items-center">
          <div className="lg:w-[65%] lg:justify-between text-white items-center lg:items-start flex flex-col lg:flex-row w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] lg:w-[45%] leading-[12vw] sm:leading-[8vw] sm:text-[7vw] text-[9.5vw] w-auto lg:leading-[3.7vw] lg:text-[3vw] flex flex-col lg:flex-row"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col items-center text-start lg:items-start lg:flex-row">
                We elevate brands by digital transformation &amp; innovation.
              </div>
              <span className=" font-[Arial] items-center lg:items-start text-center lg:text-start"></span>
            </div>
            <span className=" font-[PPNeueMontreal] w-full lg:w-[48%] text-white text-start leading-[1.5] lg:leading-[2vw] flex-col flex mt-10 lg:mt-0 text-[4vw] sm:text-[2.4vw] lg:text-[1.5vw] tracking-wide font-[350]">
              {`We enjoy creating and revolutionising brands\n
               that sustain.\n
                The notion of improving business is at the\n
                 core of all we do. Instead of offering our\n
                  clients a solution, what motivates us is to\n
                   develop something for them that will\n
                    significantly enhance their business.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <DownArrow title={"Happy to serve"} isDark />
      </div>

      <div className="flex flex-col w-full relative bg-[#1F1D1D] sm:py-[4vw] items-center">
        <div className=" lg:w-[65%] sm:w-[90%] sm:pb-28 lg:pb-[10vw] flex flex-col flex-wrap">
          {servicesData.map((data, i) => (
            <div
              key={"sdasdder" + i}
              className="flex flex-col sm:flex-row sm:divide-x divide-white"
            >
              <ServiceCard data={data.data_1} />
              {data.data_2 && <ServiceCard data={data.data_2} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex font-[PPNeueMontreal] sm:pb-10 flex-col w-full relative bg-[#1F1D1D] sm:py-[2vw] items-center">
        <div className=" w-full sm:justify-between sm:w-[90%] h-[60vh] sm:h-[30vh] lg:h-[50vh] sm:rounded-3xl bg-[#FFA400] flex flex-col sm:flex-row p-[3vw] px-16 lg:px-[6vw] justify-center space-y-10 sm:space-y-0  items-center">
          <h1 className="flex text-xl lg:text-[2vw] text-center sm:text-start lg:leading-[2.5vw]">
            Let us partner and build your<br /> dream company together.
          </h1>
          <Link href={"mailto:gopal.batra@incubr.com"}>
            <h1 className="flex cursor-pointer text-7xl sm:text-[6vw] flex-col sm:flex-row text-center sm:text-start lg:text-[4.5vw] lg:ml-[4vw]">
              Connect Today{" "}
            </h1>
          </Link>
        </div>
        <div className="hidden sm:block h-[15vh]"></div>
      </div>
      <Footer />
    </div>
  );
}
