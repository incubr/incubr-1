import Link from "next/link";
import React from "react";
import { buttonMouseEnter, onmouseleave } from "../../custom-cursor";

export default function Slides({ data, index, total }) {
  const onMouseEnter = () => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.width = "10rem";
    customCursor.style.height = "10rem";
    customCursor.classList.replace("bg-black", "bg-white");
    customCursor.classList.replace("bg-opacity-25", "bg-opacity-100");
    customCursor.innerHTML = `
    <img src="/right.svg" width="70px" />
    <span className="font-bold pt-10 font-[PPNeueMontreal] tracking-wider">scroll</span>`;
  };
  return (
    <section
      onMouseEnter={onMouseEnter}
      onMouseLeave={onmouseleave}
      className="flex-none slider-work mr-4 h-[full] sm:h-[65%] bg-[#1F1D1D] rounded-2xl overflow-hidden lg:h-full font-[PPNeueMontreal] w-full lg:w-[80%] bg-cover "
    >
      <div className="flex text-white relative tracking-wider flex-1 h-full bg-gradient-to-t from-black to-transparent w-full p-[3vw] sm:p-[1.5vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] ">
        <div className="flex flex-[2] flex-col  text-center sm:text-start  justify-end">
          {/* <h1 className="font-bold text-[1.5vw]">0{index}</h1> */}
          <div className="flex flex-col">
            <span className="text-[2vw] lg:text-[1vw] ">Client:</span>
            <div className="flex flex-col ">
              <h1 className="font-bold tracking-widest text-[8vw] sm:text-[3vw]">
                {data.title}
              </h1>
              <span className=" font-bold ">{data.description}</span>
            </div>
          </div>
          <div className="h-full w-full flex justify-center items-center pt-[1vw]">
            <div
              style={{
                backgroundImage: `url("${data.image}")`,
              }}
              className="flex bg-green-400 bg-cover rounded-2xl rounded-bl-2xl w-[100%] h-[95%] sm:h-full"
            ></div>
          </div>{" "}
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex mt-[2.5vw] sm:mt-[1vw]  justify-around sm:justify-start ">
                <span className="font-bold sm:block hidden ">Scope:&nbsp;</span>
                <div className="flex  justify-around sm:justify-start sm:space-x-5">
                  <span className="font-bold sm:block hidden ">
                    {data.clb_1}
                  </span>
                  <span className="font-bold sm:block hidden ">
                    {data.clb_2}
                  </span>
                  <span className="font-bold sm:block hidden ">
                    {data.clb_3}
                  </span>
                </div>
              </div>
              <span className="font-bold mt-[1.5vw] sm:mt-[0.5vw]">
                Partners: Mayank and Keshav
              </span>
            </div>
            <div className="flex flex-1 flex-col items-end justify-end">
              <Link href={"/work"}>
                <button
                  onMouseMove={buttonMouseEnter}
                  onMouseLeave={onMouseEnter}
                  className=" transition-colors duration-200 ease-in-out hover:border-[#F0C808] hover:bg-[#F0C808] hover:text-[#000] hover:shadow-md flex-none lg:w-[17vw] px-5 py-2 text-xl lg:text-[1.2vw] font-bold font-[PPNeueMontreal] border border-white rounded-full tracking-wider"
                >
                  VIEW CASE STUDIES
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const MobileSlide = ({ data, index, total }) => {
  return (
    <div className="flex-none mr-4 h-[full] sm:h-[60%] bg-[#1F1D1D] rounded-2xl overflow-hidden lg:h-full font-[PPNeueMontreal] w-full lg:w-[80%] bg-cover ">
      <div className="flex text-white relative tracking-widest flex-1 h-full bg-gradient-to-t from-black to-transparent w-full p-[3vw] sm:p-[1vw] px-[4vw] sm:px-[3vw] 2xl:p-[1vw]">
        <div className="flex flex-[2] flex-col text-[3vw] text-center sm:text-start sm:text-[1vw] justify-end">
          {/* <h1 className="font-bold text-[1.5vw]">0{index}</h1> */}
          <span>Client</span>
          <h1 className="font-bold tracking-widest text-[8vw] sm:text-[3vw]">
            {data.title}
          </h1>
          <span className=" font-bold ">{data.description}</span>
          <div className="h-full w-full flex justify-center items-center pt-[1vw]">
            <div
              style={{
                backgroundImage: `url("${data.image}")`,
              }}
              className="flex bg-green-400 bg-cover rounded-2xl rounded-bl-2xl w-[100%] h-[95%] sm:h-full"
            ></div>
          </div>{" "}
          <div className="flex mt-[2.5vw] sm:mt-[1vw] text-[3vw] sm:text-[1.3vw] justify-around sm:justify-start sm:space-x-5">
            <div className="flex mt-[2.5vw] sm:mt-[1vw]  justify-around sm:justify-start ">
              <span className="font-bold block ">Scope:&nbsp;</span>
              <div className="flex  justify-around sm:justify-start space-x-2">
                <span className="block font-bold sm:hidden">Web Dev.,</span>
                <span className="block font-bold sm:hidden">Exp. Design,</span>
                <span className="block font-bold sm:hidden">{data.clb_3}</span>
              </div>
            </div>
          </div>
          <span className="font-bold text-[2.5vw] sm:text-[1vw] mt-[1.5vw] sm:mt-[0.5vw]">
            Partners: Mayank and Keshav
          </span>
        </div>
        {/* <div className="flex flex-1 flex-col h-full items-end justify-end">
          <Link href={"/work"}>
            <button
              onMouseMove={buttonMouseEnter}
              onMouseLeave={onMouseEnter}
              className=" transition-colors duration-200 ease-in-out hover:border-[#F0C808] hover:bg-[#F0C808] hover:text-[#000] hover:shadow-md flex-none lg:w-[17vw] px-5 py-3 text-xl lg:text-[1.2vw] font-bold font-[PPNeueMontreal] border border-white rounded-full tracking-wider"
            >
              VIEW CASE STUDIES
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
