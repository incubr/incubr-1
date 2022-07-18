import { Store } from "@/context";
import { DarkHeaders } from "@/src/components/headers";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import Navigation from "@/src/components/navigation";
import { onmouseleave } from "@/src/custom-cursor";
import Image from "next/image";
import React from "react";
import ArrowDown from "@/assets/arrowDown.svg";
import ServiceCard from "@/src/components/common/serviceCard";
import Footer from "@/src/components/footer";
import { servicesData } from "@/data/services";
import Link from "next/link";

export default function Services() {
  const { height } = React.useContext(Store);
  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#1F1D1D] flex flex-col"
        style={{ height: height, paddingBottom: height * 0.05 }}
      >
        <Navigation isDark={true} />
        <DarkHeaders />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-white flex flex-col lg:flex-row w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] text-4xl sm:text-7xl w-60 sm:w-[80%] lg:w-[25vw] lg:leading-[4vw] space-y-3 lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col lg:flex-row -mb-3 ">
                We Innovate, Nourish &amp;
              </div>
              <span className=" font-[Arial] text-4xl sm:text-7xl lg:text-[3.5vw]">
                Grow Startups
              </span>
            </div>
            <span className="font-[PPNeueMontreal] lg:leading-[1.5] flex-col flex mt-10 lg:mt-0 lg:ml-10 text-sm sm:text-xl lg:text-[1.5vw] tracking-wide font-[350]">
              {`We are uniquely positioned with skills to\n
               build your next big Startup. With our\n
                high-quality development services, you\n
                 can propel your company into the future.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <div className="flex w-full lg:absolute bottom-10 justify-center">
          <div className="flex w-[85%] items-end flex-col">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer w-32 lg:w-44 h-32 lg:h-44 flex flex-col items-center justify-between"
            >
              <div className="lg:w-36 w-24 h-24 lg:h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out bg-[#F0C808] flex rounded-full border justify-center items-center">
                <Image src={ArrowDown} />
              </div>
            </div>
            <h1 className="font-bold text-white text-xl lg:text-[1.2vw] font-[PPNeueMontreal] tracking-widest">
              Happy to serve
            </h1>
          </div>
        </div>
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
