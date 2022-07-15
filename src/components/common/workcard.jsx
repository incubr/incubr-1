import React from "react";

export default function WorkCard({data, isEven }) {
  return (
    <div
      className={`w-full flex ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col-reverse mt-10 lg:mt-[3vw]`}
    >
      <div
        className={`flex ${
          isEven && "ml-5"
        } flex-1 text-white pb-20 px-4 mt-5 lg:pb-[6vw] font-[PPNeueMontreal]`}
      >
        <div className="flex lg:leading-[4vw] justify-end lg:text-[2vw]">
          01.
        </div>
        <div className="flex w-[100%] flex-col ml-[3vw]">
          <span className="">{data.category}</span>
          <h1 className="lg:text-[2.7vw] lg:leading-[3.5vw] text-3xl sm:text-4xl w-[80%] sm:w-[80%]">
            {data.title}
          </h1>
          <span className=" mt-6 sm:mt-10 lg:mt-[2.7vw] lg:leading-[1.5vw] text-sm lg:text-[1.1vw]">
            {data.description}
          </span>
        </div>
      </div>
      <div className="flex flex-1 p-4 px-0 sm:px-4 ">
        <div className="w-full  bg-gray-400 h-60 lg:h-auto"></div>
      </div>
    </div>
  );
}
