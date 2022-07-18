import React from "react";
import { GSAPHorizontalScroll } from "../../animation/horizontalScroll";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import Slides, { MobileSlide } from "../common/slides";
import { onmouseleave } from "../../custom-cursor";
import { work, workForHomePage } from "@/data/work";

export default function OurWork() {
  React.useEffect(() => {
    GSAPHorizontalScroll();
  }, []);

  return (
    <>
      <div id="forMobile" className="flex flex-col w-full bg-[#FDFDFD] lg:bg-[#1F1D1D] lg:h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-[1.5]  lg:text-white justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center pt-[2.5vw] ">
            <Description
              text={"From metaverse of projects delivered and happy."}
            />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={onmouseleave}
        className={`hidden sm:flex w-auto h-[680vw] lg:h-[520vw] xl:h-[500vw] -z-10`}
      >
        <div
          id="PageWrap"
          className="flex h-screen items-center p-4 w-full my-10"
        >
          {workForHomePage.map((i, index) => (
            <Slides
              data={i}
              index={index + 1}
              total={workForHomePage.length}
              key={"sadasdasd" + i.id.toString()}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col  sm:space-y-auto mb-20 flex-wrap sm:hidden w-full px-6 sm:px-10">
        {workForHomePage.map((i) => (
          <MobileSlide data={i} key={"sadasdassd" + i.id.toString()} />
        ))}
      </div>
    </>
  );
}
