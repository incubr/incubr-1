import React from 'react'
import ArrowDown from "@/assets/arrowDown.svg";


export default function DownArrow() {
  return (
    <div className="flex w-full bg-[#FDFDFD] bottom-10 mt-10 lg:h-[28vw] items-center justify-center">
      <div className="flex w-[100%] justify-center">
        <div
          onClick={() => window.scrollTo(0, window.scrollY + 700)}
          className="w-48 h-48 flex flex-col cursor-pointer items-center justify-center"
        >
          <div className="button w-36 h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
            <Image src={ArrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

