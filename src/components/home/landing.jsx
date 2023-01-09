import React from "react";
import {Store} from "../../../context";
import Headers from "../headers";
import {onmouseleave} from "../../custom-cursor";
import Navigation from "../navigation";
import Link from "next/link";
import MobileNavigation from "../mobileNavigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper"
import "swiper/css";
import DownArrow from "../common/DownArrow";

const TEXTS=["centered", "empathized", "focused", "desired"];

export const onMouseEnterOnTitle=() => {
  const customCursor=document.querySelector(".cursor");
  customCursor.style.width="7rem";
  customCursor.style.height="7rem";
};

export default function Landing() {
  const {height}=React.useContext(Store);
  const [index, setIndex]=React.useState(0);
  const [width, setWidth]=React.useState(0);

  React.useEffect(() => {
    const intervalId=setInterval(
      () => setIndex((index) => index+1),
      3000 // every 3 seconds
    );
    setWidth(window.innerWidth);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="w-full light__section h-[95vh] lg:h-screen relative bg-[#FDFDFD] flex flex-col"
    // style={{ height: width > 1024 ? height - height * 0.05 : "95vh" }}
    >
      {/* <Navigation />
      <MobileNavigation /> */}
      <Headers />
      <div className="flex flex-1 justify-center sm:pb-0 items-center">
        <div className="w-[85%] sm:w-full lg:w-[60%] mt-0 sm:mt-16 lg:mt-0 sm:px-16 lg:px-0">
          <div
            className=" font-[Arial] leading-[14vw] font-semibold text-[12vw] sm:text-[10vw] sm:leading-[11vw] lg:leading-[5vw] lg:text-[4.3vw] justify-center flex flex-col"
            onMouseEnter={onMouseEnterOnTitle}
            onMouseLeave={onmouseleave}
          >
            <div className="flex flex-col items-start overflow-hidden lg:items-end lg:flex-row">
              <span className=" z-[10] w-auto lg:mr-[1.5vw] lg:w-auto flex sm:justify-center">
                Expand Your
              </span>
            </div>
            <span className=" font-[Arial] lg:mt-[0.5vw] items-center lg:items-start text-start">
              Business Into India
            </span>
          </div>
          <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
            {`Get access to the biggest consumer market available on planet`
              .split("\n")
              .map((line, i) => (
                <span key={i+line}>{line}</span>
              ))}
          </span>
          <span className="flex font-[PPNeueMontreal] w-[85%] text-start lg:text-start leading-[1.5] flex-col lg:hidden mt-[5vw] sm:mt-[3.5vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1.5vw] tracking-wide font-[350]">
            {`Get access to the biggest consumer market available on planet`
              .split("\n")
              .map((line, i) => (
                <span key={i+line}>{line}</span>
              ))}
          </span>
        </div>
      </div>
      <DownArrow title={"Welcome"} />
    </div>
  );
}
