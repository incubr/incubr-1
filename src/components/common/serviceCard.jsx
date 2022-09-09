import React from "react";

export default function ServiceCard({ data }) {
  return (
    <div
      className={`flex ${
        ([1,2,3, 4].includes(data.id)) && "border-b border-white"
      } w-full hover:bg-[#FFA400] transition-colors duration-300 ease-in-out group sm:w-1/2 bg-white bg-opacity-10 text-white py-10 lg:py-[3vw] font-[PPNeueMontreal]`}
    >
      <div className="flex w-[70%] sm:w-[90%] flex-col mx-[6vw] sm:mx-[3vw]">
        <div className="flex lg:w-auto opacity-20 group-hover:text-black lg:leading-[2.5vw] lg:text-[1.5vw]">
          0{data.id}.
        </div>
        <h1 className="lg:text-[2.5vw] group-hover:text-black lg:leading-[3vw] text-3xl sm:text-4xl w-[80%] sm:w-70%]">
          {data.title}
        </h1>
        <span className=" mt-6 sm:mt-10 group-hover:text-black lg:mt-[3.5vw] lg:leading-[1.5vw] text-sm lg:text-[1.1vw]">
          {data.description}
        </span>
      </div>
    </div>
  );
}
