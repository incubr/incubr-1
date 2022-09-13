import Headers from "@/src/components/headers";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import Navigation from "@/src/components/navigation";
import { onmouseleave } from "@/src/custom-cursor";
import React from "react";
import { Store } from "@/context";
import Footer from "@/src/components/footer";
import { jobs } from "@/data/jobs";
import Link from "next/link";
import MobileNavigation from "@/src/components/mobileNavigation";
import DownArrow from "@/src/components/common/DownArrow";

export default function Careers() {
  const { height, width } = React.useContext(Store);

  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#fff] flex flex-col"
        style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
      >
        <Navigation />
        <MobileNavigation />
        <Headers />
        <div className="flex flex-1 justify-center sm:pb-0 items-center">
          <div className="lg:w-[60%] text-black items-start flex flex-col w-full px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw] sm:text-[9.5vw] sm:leading-[11vw] w-auto sm:w-[80%] lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col text-start ">
                Creative. Passionate.
              </div>
              <span className=" font-[Arial] text-start">
                Dedicated.
              </span>
            </div>
            <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-[2vw] text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`We know that finding a meaningful and rewarding\n
               job can be difficult at times. Our goal is to simplify\n
                that process for you. Ready to join the\n
                 revolution? Browse through the available\n
                  jobs and apply today. `
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
            <span className="flex font-[PPNeueMontreal] w-full text-start leading-[1.5] flex-col lg:hidden mt-[4vw] text-[4vw] sm:text-[2.4vw] lg:text-[1.5vw] tracking-wide font-[350]">
              {`We know that finding a meaningful and\n 
              rewarding job can be difficult at times.\n
               Our goal is to simplify that process for \n
               you. Ready to join the revolution? Browse\n
                through the available jobs and apply\n
                 today. `
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <DownArrow title={"Scroll down"} />
      </div>

      <div className="w-full flex py-20 lg:py-[5vw] justify-center">
        <div className="hidden sm:flex w-full font-[PPNeueMontreal] sm:w-[60%] border-t border-black">
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs text-gray-500 uppercase ">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Hours
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((i) => (
                <>
                  <tr
                    onClick={() => {
                      document
                        .getElementById("jd_" + i.id)
                        .classList.toggle("hidden");
                    }}
                    className="bg-white cursor-pointer"
                  >
                    <td
                      scope="row"
                      className="px-2 lg:px-6 py-8 text-xl lg:text-[3vw] font-medium text-gray-900 whitespace-nowrap"
                    >
                      {i.title}
                    </td>
                    <td className="px-6 py-4 lg:text-[1.2vw]">{i.hours}</td>
                    <td className="px-6 py-4 lg:text-[1.2vw]">{i.location}</td>
                  </tr>
                  <tr
                    id={`jd_${i.id}`}
                    className="hidden transition-all ease-in-out duration-500"
                  >
                    <td colSpan={3} className="px-6 py-4">
                      <div className="flex flex-col">
                        <span>{i.description}</span>
                        <span className="mt-5 font-bold text-xl">
                          Job Responsibilities:
                        </span>
                        {i.responsibilities.map((j, index) => (
                          <span key={index + j} className="mt-1">
                            {index + 1}. {j}
                          </span>
                        ))}

                        <span className="mt-5 font-bold text-xl">
                          Skills Required:
                        </span>
                        {i.skills.map((j, index) => (
                          <span
                            key={index + j}
                            className="mt-1 flex items-center"
                          >
                            * {j}
                          </span>
                        ))}
                      </div>
                      <div className="flex">
                        <Link href={"mailto:gopal.batra@incubr.com"}>
                          <button
                            className={`hidden button mt-4 rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl`}
                          >
                            Apply Now
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            document
                              .getElementById("jd_" + i.id)
                              .classList.toggle("hidden");
                          }}
                          className={` button ml-3 mt-4 rounded-full tracking-wider hover:shadow-md text-black border border-black hover:border-[#F0C808] hover:bg-[#F0C808] transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl`}
                        >
                          Close
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="w-full border-b border-black p-1"></div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden block w-full px-5">
          <div className="sm:hidden flex flex-col w-full font-[PPNeueMontreal] sm:w-[60%] border-t border-black">
            {jobs.map((i) => (
              <div
                key={"fgfrt" + i.id}
                className="flex flex-col w-full relative p-5 border-b border-black"
              >
                <h1
                  onClick={() => {
                    document
                      .getElementById("mjd_" + i.id)
                      .classList.toggle("hidden");
                  }}
                  className="text-4xl pb-3"
                >
                  {i.title}
                </h1>
                <table className="w-full mt-5 italic text-sm text-left text-black">
                  <thead className="text-xs text-gray-500 uppercase ">
                    <tr>
                      <th scope="col" className=" py-1">
                        Hours
                      </th>
                      <th scope="col" className=" py-1">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white text-xl ">
                      <td className=" py-2">{i.hours}</td>
                      <td className=" py-2">{i.location}</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  id={`mjd_${i.id}`}
                  className="hidden transition-all ease-in-out duration-500"
                >
                  <td colSpan={3} className=" py-4">
                    <div className="flex flex-col">
                      <span>{i.description}</span>
                      <span className="mt-4 font-bold text-lg">
                        Job Responsibilities:
                      </span>
                      {i.responsibilities.map((j, index) => (
                        <span key={index + j} className="mt-1">
                          {index + 1}. {j}
                        </span>
                      ))}

                      <span className="mt-4 font-bold text-lg">
                        Skills Required:
                      </span>
                      {i.skills.map((j, index) => (
                        <span
                          key={index + j}
                          className="mt-1 flex items-center"
                        >
                          * {j}
                        </span>
                      ))}
                    </div>
                    <div className="flex">
                      <Link href={"mailto:gopal.batra@incubr.com"}>
                        <button
                          className={` button mt-4 rounded-full tracking-wider hover:shadow-md text-white bg-[#1F1D1D] hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl`}
                        >
                          Apply Now
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          document
                            .getElementById("mjd_" + i.id)
                            .classList.toggle("hidden");
                        }}
                        className={` button ml-3 mt-4 rounded-full tracking-wider hover:shadow-md text-black border border-black hover:bg-[#F0C808] hover:text-black transition-colors ease-in-out duration-200 py-2 px-4 sm:flex items-center justify-center text-xl`}
                      >
                        Close
                      </button>
                    </div>
                  </td>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[20vh]"></div>
      <Footer isDark />
    </div>
  );
}
