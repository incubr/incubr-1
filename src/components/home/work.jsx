import React from "react";
import { GSAPHorizontalScroll } from "../../animation/horizontalScroll";
import Description from "../common/Description";
import HeadingText from "../common/Heading";
import Slides, { MobileSlide } from "../common/slides";
import { onmouseleave } from "../../custom-cursor";
import { work, workForHomePage } from "@/data/work";
import { changeBarColorBack } from "@/src/animation/mobileNavigation";

export default function OurWork() {
  React.useEffect(() => {
    GSAPHorizontalScroll();
  }, []);

  return (
    <>
      <div
        id="forMobile"
        className="flex flex-col w-full bg-[#FDFDFD] lg:bg-[#1F1D1D] lg:h-[25vw]"
      >
        <div className="flex flex-1"></div>
        <div className="flex flex-[1.5]  lg:text-white justify-center items-center flex-col">
          <HeadingText text={"explore our work"} />
          <div className="flex flex-1 justify-center pt-[2.5vw] ">
            <Description
              text={"Take a look at some of our favourite projects."}
            />
          </div>
        </div>
      </div>
      <div
        onMouseLeave={onmouseleave}
        id="forDesktop"
        className={`hidden sm:block w-auto h-[700vw] lg:h-[450vw] overflow-x-hidden -z-10`}
      >
        <div
          id="PageWrap"
          className="flex h-screen items-center p-4  "
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

      <div id="mobileSlider" className="flex h-[57vh] sm:space-y-auto overflow-x-auto mb-20  sm:hidden w-full px-6 sm:px-10">
        {workForHomePage.map((i, index) => (
          <MobileSlide
            data={i}
            index={index + 1}
            total={workForHomePage.length}
            key={"sadasda" + i.id.toString()}
          />
        ))}
      </div>
    </>
  );
}
