import React from "react";
import { GSAPHorizontalScroll } from "../../animation/horizontalScroll";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import Slides from "../common/slides";
import { onmouseleave } from "../../custom-cursor";

export default function OurWork() {

  React.useEffect(() => {
    GSAPHorizontalScroll();
  }, []);


  return (
    <>
      <div className="flex flex-col w-full bg-[#FDFDFD] h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center items-center">
            <Description
              text={"From metaverse of projects delivered and happy."}
            />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={onmouseleave}
        className="flex w-full h-[320vw] -z-10"
      >
        <div
          
          id="PageWrap"
          className="flex flex-nowrap h-screen p-4 w-full my-10"
        >
          {[1, 2, 3].map((i) => (
            <Slides key={"sadasdasd" + i.toString()} />
          ))}
        </div>
      </div>
    </>
  );
}
