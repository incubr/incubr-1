import React from 'react'

export default function ServiceCard() {
  return (
    <div className="flex w-full text-white pt-20 lg:pt-[6vw] font-[PPNeueMontreal]">
      <div className="flex w-[15%] lg:leading-[4vw] justify-end lg:text-[2vw]">
        01.
      </div>
      <div className="flex w-[70%] sm:w-[56%] flex-col ml-[3vw]">
        <h1 className="lg:text-[3vw] lg:leading-[4vw] text-3xl sm:text-4xl w-[80%] sm:w-[60%]">
          Lorem Ipsum Dolor
        </h1>
        <span className=" mt-6 sm:mt-10 lg:mt-[2.7vw] lg:leading-[1.5vw] text-sm lg:text-[1.1vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </div>
    </div>
  );
}
