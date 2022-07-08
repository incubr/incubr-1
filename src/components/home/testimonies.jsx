import React from "react";
import Description from "../common/Description";
import HeadingText from "../common/Heading";

export default function Testimonies() {

  return (
    <>
      <div  className="flex flex-col w-full bg-[#FDFDFD] h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center items-center">
            <Description
              text={
                "Its truly gratifying when our customers find our\n work valuable and purposeful."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap p-4 my-10 h-[100vh] bg-[#110A0A]"></div>
    </>
  );
}
