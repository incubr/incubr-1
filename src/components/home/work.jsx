import React from "react";
import { GSAPHorizontalScroll } from "../../animation/horizontalScroll";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import Slides, { MobileSlide } from "../common/slides";
import { onmouseleave } from "../../custom-cursor";
import { work } from "@/data/work";

export default function OurWork() {
  React.useEffect(() => {
    GSAPHorizontalScroll();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full bg-[#FDFDFD] lg:bg-[#1F1D1D] lg:h-[25vw]">
        <div className="flex flex-1"></div>
        <div className="flex flex-[2] lg:text-white justify-center items-center flex-col">
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
        className={`hidden lg:flex w-full h-[450vw] xl:h-[420vw] -z-10`}
      >
        <div
          id="PageWrap"
          className="flex flex-nowrap h-screen p-4 w-full my-10"
        >
          {work.map((i) => (
            <Slides data={i} key={"sadasdasd" + i.id.toString()} />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  sm:space-y-auto flex-wrap lg:hidden w-full px-6 sm:px-10">
        {work.map((i) => (
          <MobileSlide data={i} key={"sadasdassd" + i.id.toString()} />
        ))}
      </div>
    </>
  );
}
