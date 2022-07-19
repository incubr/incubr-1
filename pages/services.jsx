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
        style={{ height: height , paddingBottom: height * 0.05 }}
      >
        <Navigation isDark={true} />
        <DarkHeaders />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-white items-center lg:items-start flex flex-col lg:flex-row w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw] sm:text-7xl w-auto sm:w-[80%] lg:w-[25vw] lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col items-center text-center lg:text-start lg:items-start lg:flex-row">
                We Innovate, Nourish &amp;
              </div>
              <span className=" font-[Arial] leading-[14vw] items-center lg:items-start text-center lg:text-start text-[11vw] sm:text-7xl lg:text-[3.5vw]">
                Grow Startups
              </span>
            </div>
            <span className=" font-[PPNeueMontreal] text-white  text-center lg:text-start leading-[1.5] flex-col flex mt-10 lg:mt-0 text-[4vw] sm:text-xl lg:text-[1.5vw] tracking-wide font-[350]">
              {`We are uniquely positioned with skills to\n
               build your next big Startup. With our\n
                high-quality development services, you\n
                 can propel your company into the future.`
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
        <div className="flex w-full lg:absolute h-[18vh]  lg:h-auto bottom-10 justify-center">
          <div className="flex w-[85%] justify-center lg:justify-end">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer sm:w-48 sm:h-48 flex flex-col items-center lg:justify-between"
            >
              <div className="sm:w-36 w-[22vw] h-[22vw] sm:h-36 bg-[#F0C808]  hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full justify-center items-center">
                <svg
                  width="31"
                  height="74"
                  viewBox="0 0 31 74"
                  fill="none"
                  className="lg:block hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5634 72.9347C16.2563 73.3974 15.8414 73.6958 15.4101 73.7642C14.9788 73.8327 14.5664 73.6657 14.2636 73.2999L0.561567 56.748C0.258733 56.3822 0.0903052 55.8476 0.0933311 55.2618C0.096357 54.6759 0.270591 54.0869 0.577705 53.6242C0.884817 53.1616 1.29965 52.8632 1.73095 52.7947C2.16225 52.7262 2.57468 52.8932 2.87751 53.2591L13.8231 66.4812L14.1483 3.09009C14.1498 2.79965 14.1934 2.50537 14.2766 2.22405C14.3598 1.94273 14.481 1.67987 14.6333 1.45049C14.7855 1.22111 14.9659 1.0297 15.164 0.887187C15.3621 0.744673 15.5742 0.653846 15.788 0.619894C16.0018 0.585942 16.2133 0.60953 16.4102 0.689308C16.6072 0.769087 16.7859 0.903495 16.936 1.08486C17.0861 1.26622 17.2048 1.49099 17.2853 1.74633C17.3657 2.00166 17.4063 2.28257 17.4048 2.57301L17.0751 65.9649L28.1754 49.2422C28.4825 48.7795 28.8973 48.4811 29.3286 48.4126C29.7599 48.3441 30.1723 48.5112 30.4752 48.877C30.778 49.2428 30.9464 49.7775 30.9434 50.3633C30.9404 50.9491 30.7661 51.5381 30.459 52.0008L16.5634 72.9347Z"
                    fill="#000"
                  />
                </svg>
                <svg
                  width="19"
                  height="45"
                  viewBox="0 0 19 45"
                  fill="none"
                  className="block lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4456 43.5671C10.2643 43.8432 10.0192 44.0209 9.76423 44.0613C9.50926 44.1017 9.26528 44.0014 9.08597 43.7824L0.97272 33.8754C0.793406 33.6565 0.693447 33.3368 0.694834 32.9868C0.696219 32.6368 0.798837 32.2851 0.980111 32.009C1.16138 31.733 1.40647 31.5552 1.66144 31.5148C1.91642 31.4744 2.1604 31.5748 2.33971 31.7937L8.82084 39.7077L8.96946 1.83242C8.97014 1.65889 8.99572 1.48311 9.04473 1.31513C9.09374 1.14715 9.16522 0.990246 9.2551 0.853386C9.34497 0.716527 9.45147 0.602389 9.56852 0.517489C9.68557 0.432589 9.81088 0.378589 9.93729 0.358574C10.0637 0.338559 10.1887 0.35292 10.3053 0.400837C10.4218 0.448753 10.5275 0.529287 10.6164 0.637841C10.7053 0.746395 10.7756 0.880842 10.8234 1.03351C10.8711 1.18617 10.8953 1.35406 10.8946 1.5276L10.7433 39.4033L17.2953 29.4257C17.4766 29.1497 17.7216 28.9719 17.9766 28.9315C18.2316 28.8912 18.4756 28.9915 18.6549 29.2104C18.8342 29.4294 18.9342 29.7491 18.9328 30.0991C18.9314 30.4491 18.8288 30.8008 18.6475 31.0769L10.4456 43.5671Z"
                    fill="#000"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-xl text-white mt-[2vw] lg:mt-0 lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
                Happy to serve
              </h1>
            </div>
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
