import React from "react";
import { Store } from "../../../context";
import TiltedArrow from "../../../assets/tiltedarrow.svg";
import SmallArrow from "@/assets/Vector (1).svg";
import Image from "next/image";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";
import Link from "next/link";
import { onMouseEnterOnTitle } from "./landing";

const Texts = [
  "WEB DESIGN & DEVELOPMENT",
  "BUILD BRAND ASSETS",
  "FIND & DEPLOY TECH. RESOURCES",
  "TECHNOLOGY SUPPORT",
];

export default function About() {
  const { height } = React.useContext(Store);

  return (
    <div
      className="dark__section bg-[#1F1D1D] text-white flex justify-center items-center"
      style={{ height }}
    >
      <div className="flex w-full flex-col justify-center  lg:flex-row">
        <div className="w-[100%] lg:w-[60%] flex flex-col lg:flex-row px-6 lg:px-0">
          <div
            className="flex flex-[1.5] w-full justify-center lg:justify-start items-center  lg:-mt-[5vw]"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            {/* <div className="w-[40%] hidden lg:flex justify-end mr-10">
              <Image src={TiltedArrow} />
            </div>
            <div className=" flex lg:hidden justify-end mr-10">
              <Image src={SmallArrow} />
            </div> */}
            <h1 className=" text-6xl sm:text-8xl lg:text-[7vw] items-center flex  font-[Arial]  cursor-pointer">
              {/* <svg
                viewBox="0 0 82 82"
                fill="none"
                className=" h-[10vw] w-[10vw] sm:w-[4.5vw] mr-[4vw] lg:mr-[2vw] sm:h-[4.5vw]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M78.2322 0.792978C79.125 0.796194 79.98 1.15395 80.609 1.78755C81.2381 2.42114 81.5897 3.27868 81.5865 4.17151L81.441 44.5683C81.4378 45.4611 81.08 46.3161 80.4464 46.9451C79.8128 47.5742 78.9553 47.9258 78.0625 47.9225C77.1696 47.9193 76.3146 47.5616 75.6856 46.928C75.0566 46.2944 74.705 45.4368 74.7082 44.544L74.8244 12.2737L6.26744 80.3454C5.95332 80.6572 5.58085 80.9042 5.17129 81.0721C4.76174 81.24 4.32312 81.3256 3.88048 81.324C3.43784 81.3224 2.99984 81.2337 2.59151 81.0628C2.18317 80.8919 1.81249 80.6423 1.50062 80.3282C1.18876 80.0141 0.941814 79.6416 0.773896 79.2321C0.605978 78.8225 0.520372 78.3839 0.521966 77.9412C0.52356 77.4986 0.612323 77.0606 0.783187 76.6523C0.954051 76.2439 1.20367 75.8733 1.51779 75.5614L70.0815 7.49651L37.8112 7.38029C36.9184 7.37708 36.0634 7.01932 35.4343 6.38572C34.8053 5.75213 34.4537 4.8946 34.4569 4.00177C34.4601 3.10895 34.8179 2.25396 35.4515 1.62491C36.0851 0.995867 36.9426 0.644277 37.8354 0.647493L78.2322 0.792978Z"
                  fill="#F8F8F8"
                />
              </svg> */}
              <svg
                viewBox="0 0 67 67"
                fill="none"
                className=" h-[10vw] w-[10vw] sm:w-[4.5vw] mr-[4vw] lg:mr-[1.5vw] sm:h-[4.5vw]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M63.8777 0.259323C64.6007 0.261927 65.293 0.554003 65.8024 1.07129C66.3117 1.58859 66.5964 2.28872 66.5938 3.01768L66.475 36.0002C66.4724 36.7291 66.1827 37.4272 65.6696 37.9408C65.1565 38.4544 64.4621 38.7415 63.7392 38.7389C63.0162 38.7363 62.3239 38.4442 61.8145 37.9269C61.3052 37.4096 61.0205 36.7095 61.0231 35.9805L61.118 9.63302L5.6022 65.2127C5.34784 65.4673 5.04622 65.669 4.71458 65.8061C4.38293 65.9432 4.02776 66.0131 3.66933 66.0118C3.3109 66.0105 2.95624 65.938 2.62559 65.7985C2.29495 65.659 1.99479 65.4552 1.74226 65.1988C1.48974 64.9423 1.28978 64.6382 1.15382 64.3038C1.01786 63.9695 0.948551 63.6113 0.949853 63.2499C0.951154 62.8885 1.02304 62.5309 1.16141 62.1975C1.29978 61.8641 1.50191 61.5615 1.75628 61.3069L57.2775 5.7327L31.1466 5.6386C30.4236 5.63599 29.7313 5.34392 29.2219 4.82663C28.7126 4.30934 28.4279 3.6092 28.4305 2.88024C28.4332 2.15128 28.7229 1.45321 29.2359 0.9396C29.749 0.425994 30.4434 0.138912 31.1664 0.141516L63.8777 0.259323Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
              WE DO
            </h1>
          </div>
          <div className="flex flex-col text-lg sm:text-2xl text-center lg:text-start lg:text-[1.5vw]">
            <div className="flex flex-col w-auto font-[PPNeueMontreal] mt-10">
              <div className="flex flex-col w-auto space-y-4 lg:space-y-[0.4vw] tracking-wider">
                {Texts.map((text, index) => (
                  <>
                    <span key={"addasd" + index} className="">{text}</span>
                    <span key={"addassd" + index} className="flex justify-center lg:justify-start px-[5.5vw]">
                      <svg
                        width="6"
                        viewBox="0 0 6 55"
                        className=" h-[7vw] sm:h-16 lg:h-[2.8vw] "
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.333333 52C0.333333 53.4728 1.52724 54.6667 3 54.6667C4.47276 54.6667 5.66667 53.4728 5.66667 52C5.66667 50.5272 4.47276 49.3333 3 49.3333C1.52724 49.3333 0.333333 50.5272 0.333333 52ZM2.5 0V52H3.5V0H2.5Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </>
                ))}
              </div>
              <div
                onMouseEnter={buttonMouseEnter}
                onMouseLeave={onmouseleave}
                className="flex text-black mt-[7vw] sm:mt-[5vw] lg:mt-[2vw] cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black  font-bold tracking-wider"
              >
                <Link href={"/services"}>
                  <span className="p-2 px-8 border bg-white hover:border-[#F0C808] hover:bg-[#F0C808] border-white rounded-full">
                    &amp; much more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[20%]"></div> */}
      </div>
    </div>
  );
}
