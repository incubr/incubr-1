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
              className=" font-[Arial] text-6xl sm:text-8xl w-48 lg:w-[18vw] space-y-3 lg:text-[4.3vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col lg:flex-row">Lorem Ipsum </div>
              <span className=" font-[Arial] text-6xl sm:text-8xl lg:text-[4.3vw]">
                Dolor
              </span>
            </div>
            <span className="font-[PPNeueMontreal] lg:leading-[1.5] flex-col flex mt-10 lg:mt-0 lg:ml-10 text-sm sm:text-xl lg:text-[1.5vw] tracking-wide font-[350]">
              {`Lorem ipsum dolor sit amet, consectetur\n 
              adipiscing elit, sed do eiusmod tempor\n 
              incididunt ut labore et dolore magna\n 
              aliqua.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <div className="flex w-full lg:absolute bottom-10 justify-center">
          <div className="flex w-[85%] justify-end">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer w-32 lg:w-44 h-32 lg:h-44 flex flex-col items-center justify-between"
            >
              <div className="lg:w-36 w-24 h-24 lg:h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out bg-[#F0C808] flex rounded-full border justify-center items-center">
                <Image src={ArrowDown} />
              </div>
              <h1 className="font-bold text-white text-xl lg:text-[1.3vw] font-[PPNeueMontreal] tracking-widest">
                lorem ipsum
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full relative bg-[#1F1D1D] py-[4vw] items-center">
        <div className=" lg:w-[60%] pb-28 lg:pb-[10vw] flex flex-col">
          {[1, 2, 3].map((i) => (
            <ServiceCard key={"sdasdder" + i} />
          ))}
        </div>
      </div>

      <div className="flex font-[PPNeueMontreal] pb-10 flex-col w-full relative bg-[#1F1D1D] py-[4vw] items-center">
        <div className=" w-[85%] h-[78vh] bg-white flex flex-col lg:flex-row p-[3vw] px-16 lg:px-[6vw] justify-center space-y-10 lg:space-y-0 lg:justify-start items-center">
          <h1 className="flex text-xl lg:text-[2.2vw] text-center lg:text-start lg:leading-[2.5vw]">
            Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, ed do eiusmod tempor i
          </h1>
          <h1 className="flex text-7xl flex-col sm:flex-row lg:text-[4.5vw] lg:ml-[4vw]">
            <span className="border-b border-[#1F1D1D] sm:mr-5">Lorem</span>
            ipsum{" "}
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}
