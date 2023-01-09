import { Store } from "@/context";
import { howWeDo } from "@/data/howWeDo";
import { buttonMouseEnter, onmouseleave } from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";
import { onMouseEnterOnTitle } from "./landing";

export default function MiddleSection() {
  return (
    <div className="flex h-screen w-full bg-[#ffffff] justify-center items-center ">
      <div className="flex w-full py-[10vw] sm:py-[8vw] text-white bg-black lg:py-[10vh] flex-col lg:flex-row lg:items-start h-full justify-between">
        <div className="flex px-[6vw] lg:px-0 flex-col w-full lg:w-[38%] items-end">
          <div className="flex flex-col w-[97%] lg:w-[82%] ">
            <h1
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
              className=" text-[10vw] mt-[4vw] sm:mt-0 font-semibold capitalize w-full lg:px-0 justify-start text-center sm:text-left sm:text-[8vw] lg:text-[3.5vw] lg:leading-[5vw] flex  font-[Arial]  cursor-pointer"
            >
              How we do
            </h1>
            <div className="flex flex-col ">
              <span className=" opacity-80 font-[Arial]  mt-[2vw] sm:text-left leading-[6vw] text-[5vw] sm:text-[4vw] sm:leading-[5vw] lg:leading-[2vw] lg:text-[1.5vw] justify-center flex flex-col">
              If you don’t do business with India, you’d miss the massive growth opportunity in the next decade.
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full pr-[6vw] justify-center items-center lg:w-[50%] h-full">
          <div className="w-[80%] lg:w-full h-[90%] lg:h-full flex flex-col">
            {howWeDo.map((item, index) => (
              <div
                style={{
                  transition: "all 0.5s ease-in-out",
                }}
                className="flex flex-1 flex-col border-b border-white transition-all ease-in-out duration-500"
                onClick={() => {
                  const element = document.getElementById(item.title);
                  element.classList.toggle("hidden");

                  // hide all other elements
                  const other = howWeDo.filter((i) => i.title !== item.title);
                  other.forEach((i) => {
                    const element = document.getElementById(i.title);
                    element.classList.add("hidden");
                  });
                }}
                
              >
                <div 
                  className="flex flex-1 cursor-pointer  items-center justify-between"
                >
                  <span className="text-[7vw] sm:text-[5vw] sm:leading-[5.8vw] lg:text-[3.2vw] w- sm:w-[80%] lg:leading-[4vw] font-semibold tracking-wide">
                    {item.title}
                  </span>
                  <span>
                    <svg
                      className="lg:w-[3vw] lg:h-[3vw] sm:w-[5vw] sm:h-[5vw] w-[8vw] h-[8vw]"
                      viewBox="0 0 39 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.2458 5.48911C39.3443 4.2488 39.2294 2.35279 37.9891 1.25424C36.7488 0.155683 34.8528 0.270593 33.7542 1.51089L38.2458 5.48911ZM2.0055 38.6815C2.10573 40.3353 3.52767 41.5947 5.18149 41.4945L32.132 39.8611C33.7859 39.7609 35.0453 38.339 34.9451 36.6851C34.8448 35.0313 33.4229 33.7719 31.7691 33.8721L7.81302 35.324L6.36114 11.368C6.26091 9.71415 4.83897 8.45471 3.18515 8.55495C1.53133 8.65518 0.271896 10.0771 0.372128 11.7309L2.0055 38.6815ZM33.7542 1.51089L2.75424 36.5109L7.24576 40.4891L38.2458 5.48911L33.7542 1.51089Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <span className="py-5 hidden text-xs sm:text-base" id={item.title}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
