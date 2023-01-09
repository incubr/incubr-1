import {Store} from "@/context";
import {buttonMouseEnter, onmouseleave} from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";
import {onMouseEnterOnTitle} from "./landing";

export default function MiddleSection() {

  return (
    <div className="flex h-screen w-full bg-[#ffffff] justify-center items-center ">
      <div className="flex w-full py-[3vw] text-white bg-black lg:py-[13vh] flex-col lg:flex-row lg:items-start h-[90%] sm:h-full">
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
                Together with our incredible team, we offer services that are efficient and will help your business grow.
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center items-center lg:w-[60%] h-full">
          <div className="flex text-[5vw] sm:text-[5vw] md:text-[3vw] lg:[2vw] xl:text-[2vw] justify-between w-full sm:w-[90%] font-[500] h-[90%] md:h-full px-24 flex-col">
            <div className="flex sm:h-[23%] my-2 sm:my-0 h-[20%] sm:w-auto border-b-2 items-center w-full justify-between">
              <span>Go to Market Planning</span>
              <svg
                onClick={() => {
                  document
                    .getElementById("market_plan")
                    .classList.toggle("hidden");

                }}
                className="w-8 h-4 sm:w-8 sm:h-8" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2458 5.48911C39.3443 4.2488 39.2294 2.35279 37.9891 1.25424C36.7488 0.155683 34.8528 0.270593 33.7542 1.51089L38.2458 5.48911ZM2.0055 38.6815C2.10573 40.3353 3.52767 41.5947 5.18149 41.4945L32.132 39.8611C33.7859 39.7609 35.0453 38.339 34.9451 36.6851C34.8448 35.0313 33.4229 33.7719 31.7691 33.8721L7.81302 35.324L6.36114 11.368C6.26091 9.71415 4.83897 8.45471 3.18515 8.55495C1.53133 8.65518 0.271896 10.0771 0.372128 11.7309L2.0055 38.6815ZM33.7542 1.51089L2.75424 36.5109L7.24576 40.4891L38.2458 5.48911L33.7542 1.51089Z" fill="white" />
              </svg>


            </div>
            <div className="hidden text-black transition-all ease-in-out duration-500" id="market_plan">
              <div className="flex bg-white text-[1vw] font-normal flex-col">
                <li> Understand the feasibility of your project and define scope. Nothing is a copy paste model, it's a different consumer, and a different market. The pains and desires might be similar but the solution has to be refined or altered.
                </li>
                <li> Contact and understand - we define the universe of prospects both b2b and b2c, plan a pilot to really understand the addressable market for you and its size.
                </li>
                <li> We collate and help you work with the data and joint study to formulate a robust, cost effective strategy. </li>
              </div>
            </div>
            <div className="flex h-[25%] sm:h-[35%] justify-center items-center border-b-2">
              <div className="flex flex-col w-full">
                <span>Go to Market</span>
                <span>Implementation</span>
              </div>
              <svg
                onClick={() => {
                  document
                    .getElementById("market_implement")
                    .classList.toggle("hidden");

                }}
                className="w-8 h-4 sm:w-8 sm:h-8" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2458 5.48911C39.3443 4.2488 39.2294 2.35279 37.9891 1.25424C36.7488 0.155683 34.8528 0.270593 33.7542 1.51089L38.2458 5.48911ZM2.0055 38.6815C2.10573 40.3353 3.52767 41.5947 5.18149 41.4945L32.132 39.8611C33.7859 39.7609 35.0453 38.339 34.9451 36.6851C34.8448 35.0313 33.4229 33.7719 31.7691 33.8721L7.81302 35.324L6.36114 11.368C6.26091 9.71415 4.83897 8.45471 3.18515 8.55495C1.53133 8.65518 0.271896 10.0771 0.372128 11.7309L2.0055 38.6815ZM33.7542 1.51089L2.75424 36.5109L7.24576 40.4891L38.2458 5.48911L33.7542 1.51089Z" fill="white" />
              </svg>
            </div>
            <div className="hidden text-black transition-all ease-in-out duration-500" id="market_implement">
              <div className="flex bg-white text-[1vw] font-normal flex-col">
                <li> Understand the feasibility of your project and define scope. Nothing is a copy paste model, it's a different consumer, and a different market. The pains and desires might be similar but the solution has to be refined or altered.
                </li>
                <li> Contact and understand - we define the universe of prospects both b2b and b2c, plan a pilot to really understand the addressable market for you and its size.
                </li>
                <li> We collate and help you work with the data and joint study to formulate a robust, cost effective strategy. </li>
              </div>
            </div>
            <div className="flex h-[26%] my-6 sm:my-0 sm:h-[34%] justify-center items-center border-b-2">
              <div className="flex flex-col w-full">
                <span>Establishment And</span>
                <span>Others</span>
              </div>
              <svg
                onClick={() => {
                  document
                    .getElementById("others")
                    .classList.toggle("hidden");

                }}
                className="w-8 h-4 sm:w-8 sm:h-8" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.2458 5.48911C39.3443 4.2488 39.2294 2.35279 37.9891 1.25424C36.7488 0.155683 34.8528 0.270593 33.7542 1.51089L38.2458 5.48911ZM2.0055 38.6815C2.10573 40.3353 3.52767 41.5947 5.18149 41.4945L32.132 39.8611C33.7859 39.7609 35.0453 38.339 34.9451 36.6851C34.8448 35.0313 33.4229 33.7719 31.7691 33.8721L7.81302 35.324L6.36114 11.368C6.26091 9.71415 4.83897 8.45471 3.18515 8.55495C1.53133 8.65518 0.271896 10.0771 0.372128 11.7309L2.0055 38.6815ZM33.7542 1.51089L2.75424 36.5109L7.24576 40.4891L38.2458 5.48911L33.7542 1.51089Z" fill="white" />
              </svg>

            </div>
            <div className="hidden text-black transition-all ease-in-out duration-500" id="others">
              <div className="flex bg-white text-[1vw] font-normal flex-col">
                <li> Understand the feasibility of your project and define scope. Nothing is a copy paste model, it's a different consumer, and a different market. The pains and desires might be similar but the solution has to be refined or altered.
                </li>
                <li> Contact and understand - we define the universe of prospects both b2b and b2c, plan a pilot to really understand the addressable market for you and its size.
                </li>
                <li> We collate and help you work with the data and joint study to formulate a robust, cost effective strategy. </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
