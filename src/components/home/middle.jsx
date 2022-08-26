import { Store } from "@/context";
import { buttonMouseEnter, onmouseleave } from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";
import { onMouseEnterOnTitle } from "./landing";

export default function MiddleSection() {
  const { height } = React.useContext(Store);

  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
      className="flex h-screen w-full justify-center items-center px-[6vw] lg:px-0"
    >
      <div className="flex lg:w-[60%] flex-col items-center lg:items-start">
        <h1
          onMouseEnter={onMouseEnterOnTitle}
          onMouseLeave={onmouseleave}
          className=" text-[12vw] justify-center w-full px-[1.8vw] lg:px-0 sm:justify-start text-center sm:text-left sm:text-[8vw] lg:text-[5vw] lg:leading-[5vw] items-center flex  font-[Arial]  cursor-pointer"
        >
          Projects
        </h1>
        <div className="flex flex-col w-[95%] lg:w-2/3">
          <span className=" opacity-80 font-[Arial] text-center mt-[2vw] sm:text-left leading-[6vw] text-[5vw] sm:text-[4vw] sm:leading-[5vw] lg:leading-[2vw] lg:text-[1.5vw] justify-center flex flex-col">
            We would like to showcase our work in person. Our relationships are
            business to business and with partners and in most cases bound by
            the NDAs. <br />
            <br />
            For the integrity of our business, we don't publish our projects
            online.
            <br />
            <br />
          </span>
          <span className=" opacity-80 font-[Arial] text-center sm:text-left leading-[6vw] text-[5vw] sm:text-[4vw] sm:leading-[5vw] lg:leading-[3vw] lg:text-[1.5vw] justify-center flex flex-col">
            Please click below to explore engagement.
          </span>
          <div className="flex justify-center sm:justify-end items-center px-[4vw]">
            <div
              onMouseEnter={buttonMouseEnter}
              onMouseLeave={onmouseleave}
              className="flex text-black mt-[9vw] sm:mt-[6vw] lg:mt-[4vw] cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black tracking-wider"
            >
              <Link href={"/start"}>
                <span className="p-2 px-8 border text-black hover:text-black hover:border-[#F0C808] hover:bg-[#F0C808] border-black rounded-full">
                  Click Here
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
