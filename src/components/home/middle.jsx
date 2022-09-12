import { Store } from "@/context";
import { buttonMouseEnter, onmouseleave } from "@/src/custom-cursor";
import Link from "next/link";
import React from "react";
import { onMouseEnterOnTitle } from "./landing";

export default function MiddleSection() {

  return (
    <div className="flex h-screen w-full bg-[#ffffff] justify-center items-center ">
      <div className="flex w-full py-[3vw] lg:py-0 flex-col lg:flex-row lg:items-center h-full">
        <div className="flex px-[6vw] lg:px-0 flex-col w-full lg:w-[40%] items-end">
          <div className="flex flex-col w-[97%] lg:w-[82%] ">
            <h1
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
              className=" text-[10vw] mt-[4vw] sm:mt-0 capitalize w-full lg:px-0 justify-start text-center sm:text-left sm:text-[8vw] lg:text-[4.5vw] lg:leading-[5vw] items-center flex  font-[Arial]  cursor-pointer"
            >
              How we do
            </h1>
            <div className="flex flex-col ">
              <span className=" opacity-80 font-[Arial]  mt-[2vw] sm:text-left leading-[6vw] text-[5vw] sm:text-[4vw] sm:leading-[5vw] lg:leading-[2vw] lg:text-[1.5vw] justify-center flex flex-col">
                We would like to showcase our work in person. Our relationships
                are business to business and with partners and in most cases
                bound by the NDAs.
              </span>
              <span className=" opacity-80 mt-3 font-[Arial]  sm:text-left leading-[6vw] text-[5vw] sm:text-[4vw] sm:leading-[5vw] lg:leading-[2vw] lg:text-[1.5vw] justify-center flex flex-col">
                For the integrity of our business, we don't publish our projects
                online. Please click below to explore engagement.
              </span>
              <div className="flex justify-start items-center pr-[4vw]">
                <div
                  onMouseEnter={buttonMouseEnter}
                  onMouseLeave={onmouseleave}
                  className="flex text-black mt-[9vw] sm:mt-[6vw] lg:mt-[3vw] cursor-pointer justify-center lg:justify-start transition-colors ease-in-out duration-200 hover:text-black tracking-wider"
                >
                  <Link href={"/start-a-project"}>
                    <span className="p-2 px-8 border text-black hover:text-black hover:border-[#F0C808] hover:bg-[#F0C808] border-black rounded-full">
                      Click Here
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full lg:w-[60%] h-full justify-end">
          <div className="flex relative w-[90%] items-center justify-end h-full">
            <svg
              className="w-[100%] lg:w-[85%] h-[100%] lg:h-[98%]"
              viewBox="0 0 933 1009"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="504.5" cy="504.5" r="504.5" fill="#FFA400" />
              <circle
                cx="504.5"
                cy="504.5"
                r="499.5"
                stroke="#CC8609"
                strokeOpacity="0.41"
                strokeWidth="10"
              />
            </svg>
            <svg
              // width="625"
              // height="837"
              className="absolute h-[90%] lg:h-[80%] bottom-[4%] left-[12%]"
              viewBox="0 0 625 837"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M621.558 814.216C619.815 818.478 617.244 822.367 613.991 825.661C610.738 828.955 606.867 831.589 602.6 833.412C598.333 835.236 593.754 836.213 589.125 836.287C584.496 836.362 579.908 835.533 575.624 833.847L22.6037 617.043C18.3152 615.368 14.4126 612.869 11.1194 609.689C7.8262 606.508 5.20714 602.709 3.41225 598.51C1.61736 594.31 0.681919 589.791 0.659447 585.213C0.636975 580.635 1.52791 576.087 3.28128 571.83L228.803 22.3074C232.332 13.7086 239.154 6.80962 247.768 3.1282C256.383 -0.55322 266.084 -0.715536 274.737 2.67694C283.391 6.06942 290.288 12.7388 293.912 21.218C297.535 29.6971 297.588 39.2914 294.059 47.8902L81.7786 565.019L602.236 769.003C606.524 770.678 610.427 773.177 613.72 776.358C617.013 779.538 619.632 783.337 621.427 787.537C623.222 791.737 624.157 796.255 624.18 800.833C624.202 805.411 623.311 809.959 621.558 814.216Z"
                fill="#0061A7"
              />
            </svg>
            <svg
              // width="625"
              // height="837"
              className="absolute h-[90%] lg:h-[80%] bottom-[11%] left-[28%]"
              viewBox="0 0 625 837"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M619.657 813.734L619.655 813.738C618.012 817.756 615.586 821.425 612.516 824.534C609.445 827.643 605.791 830.13 601.762 831.852C597.733 833.574 593.41 834.496 589.041 834.567C584.672 834.637 580.344 833.854 576.304 832.265L576.302 832.264L23.2817 615.46L23.2794 615.459C19.2359 613.88 15.5586 611.525 12.4568 608.529C9.35511 605.534 6.88919 601.957 5.19943 598.003C3.50967 594.049 2.62865 589.794 2.60748 585.482C2.58633 581.17 3.42544 576.885 5.07862 572.871L5.07958 572.868L230.601 23.3458C233.929 15.2369 240.366 8.72329 248.502 5.24635C256.638 1.7694 265.795 1.61886 273.955 4.81802C282.114 8.01665 288.609 14.3011 292.021 22.2831C295.432 30.265 295.485 39.3024 292.157 47.4099L79.8765 564.538L79.1047 566.418L80.9968 567.16L601.454 771.144L601.456 771.145C605.499 772.724 609.177 775.08 612.279 778.075C615.38 781.071 617.846 784.648 619.536 788.602C621.226 792.556 622.107 796.81 622.128 801.122C622.149 805.434 621.31 809.72 619.657 813.734Z"
                fill="#FFA400"
                stroke="#0061A7"
                strokeWidth="4"
              />
            </svg>
            <svg
              // width="613"
              // height="837"
              className="absolute h-[90%] lg:h-[82%] bottom-[18%] left-[45%]"
              viewBox="0 0 613 837"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M621.823 813.976C620.081 818.238 617.509 822.127 614.256 825.421C611.003 828.715 607.132 831.349 602.865 833.172C598.598 834.996 594.019 835.973 589.39 836.047C584.761 836.122 580.173 835.293 575.889 833.607L22.8691 616.803C18.5805 615.128 14.678 612.629 11.3848 609.449C8.09158 606.268 5.47252 602.469 3.67763 598.269C1.88273 594.07 0.947299 589.551 0.924828 584.973C0.902368 580.395 1.79329 575.847 3.54666 571.59L229.068 22.0673C232.597 13.4685 239.419 6.56957 248.034 2.88815C256.648 -0.793271 266.349 -0.955587 275.002 2.43689C283.656 5.82937 290.553 12.4988 294.177 20.9779C297.801 29.4571 297.854 39.0513 294.325 47.6501L82.044 564.779L602.501 768.763C606.789 770.438 610.692 772.937 613.985 776.118C617.278 779.298 619.897 783.097 621.692 787.297C623.487 791.497 624.423 796.015 624.445 800.593C624.468 805.171 623.577 809.719 621.823 813.976Z"
                fill="#FF3F3F"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
