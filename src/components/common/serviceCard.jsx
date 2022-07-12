import React from 'react'

export default function ServiceCard({data}) {
  return (
    <div className="flex w-full text-white pt-20 lg:pt-[6vw] font-[PPNeueMontreal]">
      <div className="flex w-[15%] lg:leading-[4vw] justify-end lg:text-[2vw]">
        0{data.id}.
      </div>
      <div className="flex w-[70%] sm:w-[56%] flex-col ml-[3vw]">
        <h1 className="lg:text-[3vw] lg:leading-[4vw] text-3xl sm:text-4xl w-[80%] sm:w-70%]">
          {data.title}
        </h1>
        <span className=" mt-6 sm:mt-10 lg:mt-[2.7vw] lg:leading-[1.5vw] text-sm lg:text-[1.1vw]">
          {data.description}
        </span>
      </div>
    </div>
  );
}
